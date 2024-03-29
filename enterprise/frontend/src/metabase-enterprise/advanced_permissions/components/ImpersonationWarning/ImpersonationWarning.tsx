import { t } from "ttag";

import * as Urls from "metabase/lib/urls";
import Link from "metabase/core/components/Link";
import { isEmpty } from "metabase/lib/validate";
import Database from "metabase-lib/metadata/Database";
import { ImpersonationAlert } from "./ImpersonationWarning.styled";

interface ImpersonationWarningProps {
  database: Database;
}

export const ImpersonationWarning = ({
  database,
}: ImpersonationWarningProps) => {
  const databaseUser = database.details.user;

  const text = isEmpty(databaseUser)
    ? t`Make sure the main database credential has access to everything different user groups may need access to. It's what Dashboard uses to sync table information.`
    : t`${databaseUser} is the database user Dashboard is using to connect to ${database.name}. Make sure that ${database.details.user} has access to everything in ${database.name} that all Dashboard groups may need access to, as that database user account is what Dashboard uses to sync table information.`;

  return (
    <ImpersonationAlert icon="warning" variant="warning">
      {text}{" "}
      <Link
        className="link"
        to={Urls.editDatabase(database.id) + (databaseUser ? "#user" : "")}
      >{t`Edit settings`}</Link>
    </ImpersonationAlert>
  );
};
