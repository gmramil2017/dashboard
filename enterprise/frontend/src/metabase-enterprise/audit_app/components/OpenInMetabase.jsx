import Link from "metabase/core/components/Link";
import { Icon } from "metabase/core/components/Icon";

const OpenInMetabase = ({ ...props }) => (
  <Link {...props} className="link flex align-center" target="_blank">
    <Icon name="external" className="mr1" />
    Open in Dashboard
  </Link>
);

export default OpenInMetabase;
