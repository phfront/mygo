export interface YPDCardListSet {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
}

export interface YPDCardListImage {
  id: number;
  image_url: string;
  image_url_small: string;
}

export interface YPDCardListPrice {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
  coolstuffinc_price: string;
}

export interface YPDCardList {
  id?: number;
  name?: string;
  type?: string;
  desc?: string;
  race?: string;
  name_en?: string;
  archetype?: string;
  atk?: number;
  def?: number;
  level?: number;
  attribute?: string;
  scale?: number;
  linkval?: number;
  linkmarkers?: Array<string>;
  card_sets?: Array<YPDCardListSet>;
  card_images?: Array<YPDCardListImage>;
  card_prices?: Array<YPDCardListPrice>;
  banlist_info?: {
    ban_goat?: string;
    ban_ocg?: string;
    ban_tcg?: string;
  };
  count?: number;
  expand?: boolean;
}

export interface Deck {
  name: string;
  createdBy: string;
  main: Array<YPDCardList>;
  extra: Array<YPDCardList>;
  side: Array<YPDCardList>;
}
