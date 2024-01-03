import { updateIn } from "icepick";

import {
  PLUGIN_AUTH_PROVIDERS,
  PLUGIN_ADMIN_SETTINGS_UPDATES,
  PLUGIN_IS_PASSWORD_USER,
} from "metabase/plugins";

import MetabaseSettings from "metabase/lib/settings";

import FormikForm from "metabase/containers/FormikForm";
import GoogleAuthCard from "metabase/admin/settings/auth/containers/GoogleAuthCard";
import GoogleSettingsForm from "metabase/admin/settings/auth/containers/GoogleAuthForm";









PLUGIN_IS_PASSWORD_USER.push(user => !user.google_auth);
