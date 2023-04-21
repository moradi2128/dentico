const { gql } = require("@apollo/client");

export const GET_MENU = gql`
query GetMenu {
 acfOptionsMainMenu {
  Logo {
      favicon {
        sourceUrl
      }
      logo {
        sourceUrl
      }
    }
    mainMenu {
      callToActionButton {
        destination {
          ... on Page {
            id
            uri
          }
        }
        label
      }
      menuItems {
        items {
          destination {
            ... on Page {
              uri
            }
          }
          label
        }
        menuItems {
          destination {
            ... on Page {
              uri
            }
          }
          label
        }
      }
    }
  }

getFooter {
    sidebarOne
    sidebarTwo
    copyrightText
    socialLinks {
      iconName
      iconUrl
    }
  }
}
`