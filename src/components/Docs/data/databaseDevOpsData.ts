import {
  CardItem,
  CardSections,
  docType,
} from "@site/src/components/LandingPage/TutorialCard";
import { MODULES } from "@site/src/constants"

/* Define the cards - start */

  // Docs
  export const docsCards: CardSections = [
    {
      name: "Get started with the basics",
      description:
        "",
      list: [
        {
          title: "Get started with Feature Flags",
          module: MODULES.dbdevops,
          description:
            "Learn the basics of Harness Feature Flags.",
          link: "/docs/category/get-started-with-database-devops",
        },
        {
          title: "Create, manage, and view Database DevOpd",
          module: MODULES.dbdevops,
          description:
            "Learn how to use he different elements of Harness Database DevOps.",
          link: "/docs/category/use-database-devops",
        },
        // {
        //   title: "Third Module to add",
        //   module: MODULES.dbdevops,
        //   description:
        //     "TBD",
        //   link: "TBD",
        // },
      ],
    },

  ];
  /* Define the cards - end */