import { siteSettings }     from "./siteSettings";
import { solutionsSection } from "./solutionsSection";
import { industriesSection } from "./industriesSection";
import { whyusSection }     from "./whyusSection";
import { processSection }   from "./processSection";
import { projectsSection }  from "./projectsSection";
import { contactSection }   from "./contactSection";
import { hiringSection }    from "./hiringSection";

export const schemaTypes = [
  siteSettings,
  solutionsSection,
  industriesSection,
  whyusSection,
  processSection,
  projectsSection,
  contactSection,
  hiringSection,
];

export const schema = { types: schemaTypes };
