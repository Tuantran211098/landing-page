import { GraphQLClient } from "graphql-request";

const API_URL = "https://beta-api.bachlongmobile.com/graphql";

export const graphqlClient = new GraphQLClient(API_URL, {
  headers: {
    "Content-Type": "application/json",
  },
});

export const getSlider = async () => {
  const query = `
  query getSlider($filter: SliderFilterInput) {
    Slider(filter: $filter) {
      items {
        title
        identifier
        Banner {
          __typename
          items {
            banner_id
            caption
            link
            media
            media_alt
            name
            slider_id
          }
          page_info {
            current_page
            page_size
            total_pages
          }
        }
      }
      total_count
    }
  }`;

  const variables = {
    filter: {
      identifier: {
        eq: "banner-women-day",
      },
    },
  };

  return graphqlClient.request(query, variables);
};
