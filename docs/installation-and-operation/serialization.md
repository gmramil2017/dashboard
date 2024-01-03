---
title: "Serialization"
redirect_from:
  - /docs/latest/enterprise-guide/serialization
---

# Serialization

{% include plans-blockquote.html feature="Serialization" self-hosted-only="true" %}

Once you really get rolling with Dashboard, it's often the case that you'll have more than one Dashboard instance spun up. You might have a couple of testing or development instances and a few production ones, or maybe you have a separate Dashboard per office or region.

To help you out in situations like this, Dashboard has a serialization feature which lets you create an _export_ of the contents of a Dashboard that can then be _imported_ into one or more Metabases.

## Serialization use cases

- **Staging environments**. Enable a staging-to-production workflow for important dashboards by exporting from a staging instance of Dashboard and then importing them into your production instance(s).
- **Version control**. Check the exported files into version control and audit changes to them, as the YAML files contained within the export are pretty readable.

## What gets exported

Dashboard only includes some artifacts in its exports.

- Collections (except for personal collections, unless specified by the `--user` flag)
- Dashboards
- Saved questions
- Actions
- Models
- SQL Snippets
- Table Metadata settings
- Segments and Metrics defined in the Table Metadata
- Public sharing settings for questions and dashboards
- [General Dashboard settings](#the-general-settings-that-metabase-exports)
- Database connection settings
- Events and timelines

Dashboard will export its artifacts to a directory of YAML files. The export includes:

- A `settings.yaml` file that includes some basic, [Dashboard-wide settings](#the-general-settings-that-metabase-exports)
- Directories that contain YAML files for various Dashboard entities

An example export could include the following directories, depending on what you exported:

- actions
- collections
- databases

In the `collections/cards` directory, you'll see that Dashboard prefixes individual files with IDs to disambiguate entities that share the same name:

```
IA96oUzmUbYfNFl0GzhRj_accounts_model.yaml
KUEGiWvoBFEc5oGQCEnPg_converted_customers.yaml
qzNa8ZeFgFXrrIoF2g8m4_accounts_model_detail.yaml
```

## Example question

Questions can be found in the `cards` directory of a collection directory. Here's an example card YAML file for a native question (a question written in SQL):

```
description: The number of plans by referral source.
archived: false
collection_position: null
table_id: null
result_metadata: null
database_id: Sample Database
enable_embedding: false
collection_id: onou5H28Wvy3kWnjxxdKQ
query_type: native
name: Plan counts by source
creator_id: jeff@metabase.com
made_public_by_id: null
embedding_params: null
cache_ttl: null
dataset_query:
  type: native
  native:
    query: |-
      SELECT count(*),
             PLAN,
             SOURCE
      FROM accounts
      WHERE SOURCE IS NOT NULL
      GROUP BY PLAN,
               SOURCE
    template-tags: {}
  database: Sample Database
parameter_mappings: []
serdes/meta:
- model: Card
  id: 17p_H8e2OpHGGJVxqg4sN
  label: plan_counts_by_source
display: table
entity_id: 17p_H8e2OpHGGJVxqg4sN
collection_preview: true
visualization_settings:
  table.pivot_column: PLAN
  table.cell_column: COUNT(*)
  column_settings: null
parameters: []
dataset: false
created_at: '2023-05-22T14:32:28.124325'
public_uuid: null
```

## Before exporting or importing

If your Dashboard is:

- currently running, and
- you're using the default H2 database

You'll need to stop Dashboard before exporting or importing.

Otherwise, you're good.

## Exporting a Dashboard

To export the contents of a Dashboard instance, change into the directory where you're running the Dashboard JAR and run:

```
java -jar metabase.jar export [export_name]
```

## Export options

To view a list of `export` options, use the `help` command:

```
java -jar metabase.jar help export
```

Which will print something like:

```
export path & options
	 Serialize Dashboard instance into directory at `path`.
	 Options:
	   -u, --user EMAIL                Include collections owned by the specified user
	   -c, --collection ID             Export only specified ID; may occur multiple times.
	       --collections ID_LIST       (Legacy-style) Export collections in comma-separated list of IDs, e.g. '123,456'.
	   -C, --no-collections            Do not export any content in collections.
	   -S, --no-settings               Do not export settings.yaml
	   -D, --no-data-model             Do not export any data model entities; useful for subsequent exports.
	   -f, --include-field-values      Include field values along with field metadata.
	   -s, --include-database-secrets  Include database connection details (in plain text; use caution).
```

### `--user`

The `user` flag tells Dashboard to include collections owned by the specified user, identified by email. QUESTION: What about accounts created with SSO?

### `--collection`

The `--collection` flag (alias `-c`) lets you specify by ID one or more collections to include in the export. You can find the collection ID in the collection's URL, e.g., for a collection at: `your-metabase.com/collection/42-terraforming-progress`, the ID would be `42`.

If you want to specify multiple collections, separate the IDs with commas. E.g.,

```
java -jar metabase.jar export --collection 1,3,5,9
```

### `--no-collection`

The `--no-collection` flag (alias `-C`) tells Dashboard to exclude all collections from the export.

### `--no-settings`

The `--no-settings` flag (alias `-S`) tells Dashboard to exclude the `settings.yaml` file that includes site-wide settings, which is exported by default.

### `--no-data-model`

The `--no-data-model` flag (alias `-D`) tells Dashboard to exclude the Table Metadata settings from the export. Admins define the metadata settings in the [Table Metadata](../data-modeling/metadata-editing.md) tab of the Admin settings.

### `--include-field-values`

The `--include-field-values` flag (alias `-f`) tells Dashboard to include the sample values for field values, which Dashboard uses to present dropdown menus. By default, Dashboard excludes these sample field values.

### `--include-database-secrets`

The `--include-database-secrets` flag (alias `-s`) tells Dashboard to include connection details, including the database user name and password. By default, Dashboard excludes these database connection secrets. If you don't use this flag, you'll need to manually input the credentials in the target Dashboard. 

## Importing to a Dashboard

To import exported artifacts into a Dashboard instance, go to the directory where you're running your target Dashboard (the Dashboard you want to import into) and use the following command, where `[my_export]` is the path to the export you want to import:

```
java -jar metabase.jar import [my_export]
```

Currently, you can only import exported artifacts into a Dashboard instance that was created from the same version of Dashboard.

### You'll need to manually add license tokens

Dashboard excludes your license token from exports, so if you're running multiple environments of Dashboard Enterprise Edition, you'll need to manually add your license token to the target Dashboard(s), either via the [Dashboard user interface](https://www.metabase.com/docs/latest/paid-features/activating-the-enterprise-edition), or via an [environment variable](../configuring-metabase/environment-variables.md#mb_premium_embedding_token).

## Import options

Most options are defined when exporting data from a Dashboard. To view a list of import flags, run:

```
java -jar metabase help import

```

Which prints out:

```
import path & options
         Load serialized Dashboard instance as created by the [[export]] command from directory `path`.
         Options:
           -e, --abort-on-error  Stops import on any errors, default is to continue.
```

### `--abort-on-error`

The `--abort-on-error` flag (alias `-e`) is an optional flag that allows you to specify how the import process should handle errors. Dashboard will ignore errors by default.

## Avoid using serialization for backups

Just a note: serialization is _not_ meant to back up your Dashboard.

See [Backing up Dashboard](./backing-up-metabase-application-data.md).

If you're instead looking to do a one-time migration from the default H2 database included with Dashboard to a MySQL/Postgres, then use the [migration guide instead](./migrating-from-h2.md).

### The general settings that Dashboard exports

A list of the general settings Dashboard exports in the `settings.yaml` file.

```
humanization-strategy
native-query-autocomplete-match-style
site-locale
report-timezone-short
report-timezone-long
application-name
enable-xrays
show-homepage-pin-message
source-address-header
enable-nested-queries
custom-geojson-enabled
start-of-week
custom-geojson
available-timezones
max-results-bare-rows
hide-embed-branding?
search-typeahead-enabled
enable-sandboxes?
application-font
available-locales
landing-page
enable-embedding
application-colors
application-logo-url
application-favicon-url
show-homepage-xrays
show-metabot
enable-whitelabeling?
show-homepage-data
site-name
application-font-files
loading-message
report-timezone
show-lighthouse-illustration
persisted-models-enabled
enable-content-management?
subscription-allowed-domains
breakout-bins-num
available-fonts
custom-formatting
```

For more on Dashboard settings, see [Configuring Dashboard](../configuring-metabase/start.md)

## Further reading

- [Serialization tutorial](https://www.metabase.com/learn/administration/serialization).
- Need help? contact [support@metabase.com](mailto:support@metabase.com).