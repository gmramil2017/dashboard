---
title: Upgrading Dashboard
redirect_from:
  - /docs/latest/operations-guide/upgrading-metabase
---

# Upgrading Dashboard

Instructions for upgrading to a new [Dashboard release](../releases.md).

## Backing up your application database

The application database keeps track of all of your people, dashboards, questions, collections, permissions: all the application data in Dashboard (that is, everything but the data you've connected to Dashboard). While it's unlikely you'll need to roll back to your current version, a backup will do wonders for your peace of mind.

See [Backing up Dashboard application data](backing-up-metabase-application-data.md).

## Swapping in the new Dashboard version

Steps differ depending on whether you're running the JAR or a Docker image.

- [Upgrading a JAR running locally](#upgrading-a-jar-running-locally)
- [Upgrading a JAR running in production as a service](#upgrading-a-jar-running-in-production-as-a-service)
- [Upgrading the Docker image](#upgrading-the-docker-image)

### Upgrading a JAR running locally

If you're running the JVM Jar file directly:

1. [Back up your application database](backing-up-metabase-application-data.md).

2. Download the latest version of the JAR file:

   - [Dashboard Open Source JAR](https://www.metabase.com/start/oss/jar)
   - [Dashboard Pro or Enterprise JAR](https://downloads.metabase.com/enterprise/latest/metabase.jar)

3. Use a terminal to access your existing Dashboard process and kill it (usually CTRL-C).

4. Replace the existing JAR file (`metabase.jar`) in your Dashboard directory with the newer version.

5. Restart the server:

   ```
   java -jar metabase.jar
   ```

On startup, Dashboard will perform any tasks it needs to complete the upgrade. Once Dashboard has completed those tasks, you'll be running the new version.

### Upgrading a JAR running in production as a service

To upgrade, you'll need to stop the service, replace the JAR with the newer version, and restart the service.

E.g., if you're running Dashboard on Debian as a service using Nginx.

1. [Back up your application database](backing-up-metabase-application-data.md).

2. Download the latest version of the JAR file:

   - [Dashboard Open Source JAR](https://www.metabase.com/start/oss/jar)
   - [Dashboard Pro or Enterprise JAR](https://downloads.metabase.com/enterprise/latest/metabase.jar)

3. Stop the Dashboard service. Aassuming you called your service `metabase.service`), you'll run:

   ```
   sudo systemctl stop metabase.service
   ```

4. In your Dashboard directory on your server, replace the current (older) Dashboard JAR file with the newer JAR you downloaded.

5. Restart the service:

   ```
   sudo systemctl restart metabase.service
   ```

### Upgrading the Docker image

If you're running Dashboard in a Docker container:

1. [Back up your application database](backing-up-metabase-application-data.md).

   > WARNING: If you're not using a [production-ready database](migrating-from-h2.md), your application data (questions, dashboards, and so on) will have been stored in an H2 database _inside_ your container. Upgrading requires swapping out your existing container for a new image with the upgraded Dashboard JAR, which will wipe out your application data. We recommend switching to a production-ready database before you upgrade.

2. Stop the current Docker container.

3. Pull the latest Dashboard Docker image.

   Dashboard Open Source:

   ```
   docker pull metabase/metabase:latest
   ```

   Dashboard Pro or Enterprise:

   ```
   docker pull metabase/metabase-enterprise:latest
   ```

4. Start the new Docker container. Depending on the ports and what you want to name the container, the command will look something like:

   Dashboard Open Source:

   ```
   docker run -d -p 3000:3000 -e MB_DB_CONNECTION_URI="jdbc:postgresql://<host>:5432/metabase?user=<username>&password=<password>" --name metabase metabase/metabase:latest
   ```

   Dashboard Pro or Enterprise:

   ```
   docker run -d -p 3000:3000 -e MB_DB_CONNECTION_URI="jdbc:postgresql://<host>:5432/metabase?user=<username>&password=<password>" --name metabase metabase/metabase-enterprise:latest
   ```

On startup, Dashboard will perform the upgrade automatically. Once Dashboard has completed the upgrade, you'll be running the new version.

## Upgrading from older versions of Dashboard

If you're on a Dashboard version older than Dashboard 40, you'll need to upgrade release by release until you're on the latest version of Dashboard 40. From the latest version of Dashboard 40, you can then jump to the current version of Dashboard.

For example, if you're running Dashboard 1.38, your upgrade path would look like:

- 1.38.X
- 1.39.X
- 1.40.X
- Latest 

With X being the latest version available for each release.

For a list of releases, see [Dashboard versions](../releases.md).

## Upgrading Dashboard Cloud

If you're on a [Dashboard Cloud](https://www.metabase.com/pricing) plan, your Dashboard will upgrade automatically with each new release; no action needed on your end. There's usually a short period of time (typically a week or so), between when Dashboard announces a new release and when the Cloud team starts rolling out the new version on Dashboard Cloud. This buffer just gives the Cloud team some time to make sure the upgrades go smoothly.

## Upgrading Dashboard on other platforms

- [Upgrading AWS Elastic Beanstalk deployments](running-metabase-on-elastic-beanstalk.md#deploying-new-versions-of-metabase-on-elastic-beanstalk)
- [Upgrading Azure Web Apps deployments](running-metabase-on-azure.md#additional-configurations)

## Rolling back an upgrade

In general, regular backups (especially backups before upgrading), are the best policy, so we recommend reverting to a backup of your application database to roll back an upgrade.

But if you've made changes to your application database since upgrading that you want to keep, you may be able to use the `migrate down` command to roll back your Dashboard application database to support the previous Dashboard version you were running. When Dashboard upgrades to a new version, it runs migrations that may change the application database schema. The `migrate down` command undoes those schema changes. In general, we recommend restoring from a backup (the backup that you definitely remembered to generate before upgrading), and only using the `migrate down` command if you really need to keep changes made after your upgrade.

### Using the migrate down command

Stop your Dashboard and use the current, upgraded Dashboard JAR (not the Dashboard JAR you want to roll back to) to complete the rollback with the following command:

```
java -jar metabase.jar migrate down
```

If you're running Docker, the command would be:

```
docker run --rm metabase/metabase migrate down
```

Once the migration process completes, start up Dashboard using the JAR or Docker image for the version you want to run.
