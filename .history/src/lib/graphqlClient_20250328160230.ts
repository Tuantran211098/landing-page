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


// Hàm gọi API lấy Daily Sales
export const getProductDailySales = async (
  pageSize: number = 10,
  currentPage: number = 1
) => {
  const query = `
  query getProductDailySales(
    $filter: DailySaleFilterInput
    $pageSize: Int
    $currentPage: Int
  ) {
    DailySales(filter: $filter, pageSize: $pageSize, currentPage: $currentPage) {
      items {
        identifier
        items {
          product {
            sku
            name
            url_key
            image {
              url
            }
          }
          sale_price
          price_original
        }
      }
      page_info {
        current_page
        page_size
        total_pages
      }
      total_count
    }
  }`;

  const variables = {
    filter: {
      sale_type: {
        eq: "thuong-hieu",
      },
    },
    pageSize,
    currentPage,
  };

  return graphqlClient.request(query, variables);
};


// Hàm gọi API lấy category Apple
export const getProductApple = async (category: string) => {
  console.log("Category:", category);

  const isIphone = category === "iphone";

  const query = `
  query getProductDailySales(
    $filter: DailySaleFilterInput
    $pageSize: Int
    $currentPage: Int
  ) {
    DailySales(filter: $filter, pageSize: $pageSize, currentPage: $currentPage) {
      items {
        title
        identifier
        items {
          product {
            name
            url_key
            image {
              url
            }
            price_range {
              minimum_price {
                final_price {
                  value
                }
              }
            }
          }
          sale_price
          price_original
        }
      }
      page_info {
        current_page
        page_size
        total_pages
      }
      total_count
    }
  }`;

  const variables = {
    filter: {
      sale_type: {
        eq: isIphone ? "iphone-valentine" : "ipad-valentine",
      },
    },
    pageSize: 99,
    currentPage: 1,
  };

  return graphqlClient.request(query, variables);
};



//Hàm API gôi function Call API like new
export const getCateLikeNew = async () => {
  const query = `
	query getProductDailySales(
  $filter: DailySaleFilterInput
  $pageSize: Int
  $currentPage: Int
) {
  DailySales(filter: $filter, pageSize: $pageSize, currentPage: $currentPage) {
    items {
	 title
      identifier
      items {
        product {
          name
          url_key
		   image {
            url
          }
          	price_range {
             minimum_price {
   						   
                  final_price {
                  
  									value
                  }
                 
 						 }
 					 }
        }
        sale_price
        price_original
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
`;

const variables = {
  filter: {
    sale_type: {
      eq: "may99-valentine",
    },
  },
  pageSize: 99,
  currentPage: 1,
};

  return graphqlClient.request(query, variables);
};

export const getCateAndroid = async () => {
  const query = `
	query getProductDailySales(
  $filter: DailySaleFilterInput
  $pageSize: Int
  $currentPage: Int
) {
  DailySales(filter: $filter, pageSize: $pageSize, currentPage: $currentPage) {
    items {
	 title
      identifier
      items {
        product {
          name
          url_key
		   image {
            url
          }
          	price_range {
             minimum_price {
   						   
                  final_price {
                  
  									value
                  }
                 
 						 }
 					 }
        }
        sale_price
        price_original
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
`;

const variables = {
  filter: {
    sale_type: {
      eq: "android-valentine",
    },
  },
  pageSize: 99,
  currentPage: 1,
};
  return graphqlClient.request(query, variables);
};