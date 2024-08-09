export type CommonLandingPage = {
  benefit_title?: string | null;
  company_images: any[] | CommonLandingPageFiles1[];
  date_created?: string | null;
  date_updated?: string | null;
  id: number;
  official_check_link?: string | null;
  official_check_title?: string | null;
  origin_quality_title?: string | null;
  partner_logos: any[] | CommonLandingPageFiles4[];
  partner_title?: string | null;
  performance_certificates: any[] | CommonLandingPageFiles[];
  quality_certificates: any[] | CommonLandingPageFiles2[];
  social_share_title?: string | null;
  testimonial_title?: string | null;
  title: string;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type CommonLandingPageFiles = {
  common_landing_page_id?: number | CommonLandingPage | null;
  directus_files_id?: string | DirectusFiles | null;
  id: number;
};

export type CommonLandingPageFiles1 = {
  common_landing_page_id?: number | CommonLandingPage | null;
  directus_files_id?: string | DirectusFiles | null;
  id: number;
};

export type CommonLandingPageFiles2 = {
  common_landing_page_id?: number | CommonLandingPage | null;
  directus_files_id?: string | DirectusFiles | null;
  id: number;
};

export type CommonLandingPageFiles3 = {
  common_landing_page_id?: number | CommonLandingPage | null;
  directus_files_id?: string | DirectusFiles | null;
  id: number;
};

export type CommonLandingPageFiles4 = {
  common_landing_page_id?: number | CommonLandingPage | null;
  directus_files_id?: string | DirectusFiles | null;
  id: number;
};

export type DirectusActivity = {
  action: string;
  collection: string;
  comment?: string;
  id: number;
  ip?: string;
  item: string;
  origin?: string;
  revisions: any[] | DirectusRevisions[];
  timestamp: string;
  user?: string | DirectusUsers;
  user_agent?: string;
};

export type DirectusCollections = {
  accountability?: string;
  archive_app_filter: boolean;
  archive_field?: string;
  archive_value?: string;
  collapse: string;
  collection: string;
  color?: string;
  display_template?: string;
  group?: string | DirectusCollections;
  hidden: boolean;
  icon?: string;
  item_duplication_fields?: unknown;
  note?: string;
  preview_url?: string;
  singleton: boolean;
  sort?: number;
  sort_field?: string;
  translations?: unknown;
  unarchive_value?: string;
  versioning: boolean;
};

export type DirectusDashboards = {
  color?: string;
  date_created?: string;
  icon: string;
  id: string;
  name: string;
  note?: string;
  panels: any[] | DirectusPanels[];
  user_created?: string | DirectusUsers;
};

export type DirectusExtensions = {
  bundle?: string;
  enabled: boolean;
  folder: string;
  id: string;
  source: string;
};

export type DirectusFields = {
  collection: string | DirectusCollections;
  conditions?: unknown;
  display?: string;
  display_options?: unknown;
  field: string;
  group?: string | DirectusFields;
  hidden: boolean;
  id: number;
  interface?: string;
  note?: string;
  options?: unknown;
  readonly: boolean;
  required?: boolean;
  sort?: number;
  special?: unknown;
  translations?: unknown;
  validation?: unknown;
  validation_message?: string;
  width?: string;
};

export type DirectusFiles = {
  charset?: string;
  description?: string;
  duration?: number;
  embed?: string;
  filename_disk?: string;
  filename_download: string;
  filesize?: number;
  focal_point_x?: number;
  focal_point_y?: number;
  folder?: string | DirectusFolders;
  height?: number;
  id: string;
  location?: string;
  metadata?: unknown;
  modified_by?: string | DirectusUsers;
  modified_on: string;
  storage: string;
  tags?: unknown;
  title?: string;
  tus_data?: unknown;
  tus_id?: string;
  type?: string;
  uploaded_by?: string | DirectusUsers;
  uploaded_on: string;
  width?: number;
};

export type DirectusFlows = {
  accountability?: string;
  color?: string;
  date_created?: string;
  description?: string;
  icon?: string;
  id: string;
  name: string;
  operation?: string | DirectusOperations;
  operations: any[] | DirectusOperations[];
  options?: unknown;
  status: string;
  trigger?: string;
  user_created?: string | DirectusUsers;
};

export type DirectusFolders = {
  id: string;
  name: string;
  parent?: string | DirectusFolders;
};

export type DirectusMigrations = {
  name: string;
  timestamp?: string;
  version: string;
};

export type DirectusNotifications = {
  collection?: string;
  id: number;
  item?: string;
  message?: string;
  recipient: string | DirectusUsers;
  sender?: string | DirectusUsers;
  status?: string;
  subject: string;
  timestamp?: string;
};

export type DirectusOperations = {
  date_created?: string;
  flow: string | DirectusFlows;
  id: string;
  key: string;
  name?: string;
  options?: unknown;
  position_x: number;
  position_y: number;
  reject?: string | DirectusOperations;
  resolve?: string | DirectusOperations;
  type: string;
  user_created?: string | DirectusUsers;
};

export type DirectusPanels = {
  color?: string;
  dashboard: string | DirectusDashboards;
  date_created?: string;
  height: number;
  icon?: string;
  id: string;
  name?: string;
  note?: string;
  options?: unknown;
  position_x: number;
  position_y: number;
  show_header: boolean;
  type: string;
  user_created?: string | DirectusUsers;
  width: number;
};

export type DirectusPermissions = {
  action: string;
  collection: string;
  fields?: unknown;
  id: number;
  permissions?: unknown;
  presets?: unknown;
  role?: string | DirectusRoles;
  validation?: unknown;
};

export type DirectusPresets = {
  bookmark?: string;
  collection?: string;
  color?: string;
  filter?: unknown;
  icon?: string;
  id: number;
  layout?: string;
  layout_options?: unknown;
  layout_query?: unknown;
  refresh_interval?: number;
  role?: string | DirectusRoles;
  search?: string;
  user?: string | DirectusUsers;
};

export type DirectusRelations = {
  id: number;
  junction_field?: string;
  many_collection: string;
  many_field: string;
  one_allowed_collections?: unknown;
  one_collection?: string;
  one_collection_field?: string;
  one_deselect_action: string;
  one_field?: string;
  sort_field?: string;
};

export type DirectusRevisions = {
  activity: number | DirectusActivity;
  collection: string;
  data?: unknown;
  delta?: unknown;
  id: number;
  item: string;
  parent?: number | DirectusRevisions;
  version?: string | DirectusVersions;
};

export type DirectusRoles = {
  admin_access: boolean;
  app_access: boolean;
  description?: string;
  enforce_tfa: boolean;
  icon: string;
  id: string;
  ip_access?: unknown;
  name: string;
  users: any[] | DirectusUsers[];
};

export type DirectusSessions = {
  expires: string;
  ip?: string;
  next_token?: string;
  origin?: string;
  share?: string | DirectusShares;
  token: string;
  user?: string | DirectusUsers;
  user_agent?: string;
};

export type DirectusSettings = {
  auth_login_attempts?: number;
  auth_password_policy?: string;
  basemaps?: unknown;
  custom_aspect_ratios?: unknown;
  custom_css?: string;
  default_appearance: string;
  default_language: string;
  default_theme_dark?: string;
  default_theme_light?: string;
  id: number;
  mapbox_key?: string;
  module_bar?: unknown;
  project_color: string;
  project_descriptor?: string;
  project_logo?: string;
  project_name: string;
  project_url?: string;
  public_background?: string;
  public_favicon?: string;
  public_foreground?: string;
  public_note?: string;
  public_registration: boolean;
  public_registration_email_filter?: unknown;
  public_registration_role?: string | DirectusRoles;
  public_registration_verify_email: boolean;
  report_bug_url?: string;
  report_error_url?: string;
  report_feature_url?: string;
  storage_asset_presets?: unknown;
  storage_asset_transform?: string;
  storage_default_folder?: string | DirectusFolders;
  theme_dark_overrides?: unknown;
  theme_light_overrides?: unknown;
  theming_group: string;
};

export type DirectusShares = {
  collection: string | DirectusCollections;
  date_created?: string;
  date_end?: string;
  date_start?: string;
  id: string;
  item: string;
  max_uses?: number;
  name?: string;
  password?: string;
  role?: string | DirectusRoles;
  times_used?: number;
  user_created?: string | DirectusUsers;
};

export type DirectusTranslations = {
  id: string;
  key: string;
  language: string;
  value: string;
};

export type DirectusUsers = {
  appearance?: string;
  auth_data?: unknown;
  avatar?: string;
  description?: string;
  email?: string;
  email_notifications?: boolean;
  external_identifier?: string;
  first_name?: string;
  id: string;
  language?: string;
  last_access?: string;
  last_name?: string;
  last_page?: string;
  location?: string;
  password?: string;
  provider: string;
  role?: string | DirectusRoles;
  status: string;
  tags?: unknown;
  tfa_secret?: string;
  theme_dark?: string;
  theme_dark_overrides?: unknown;
  theme_light?: string;
  theme_light_overrides?: unknown;
  title?: string;
  token?: string;
};

export type DirectusVersions = {
  collection: string | DirectusCollections;
  date_created?: string;
  date_updated?: string;
  hash?: string;
  id: string;
  item: string;
  key: string;
  name?: string;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type DirectusWebhooks = {
  actions: unknown;
  collections: unknown;
  data: boolean;
  headers?: unknown;
  id: number;
  method: string;
  migrated_flow?: string | DirectusFlows;
  name: string;
  status: string;
  url: string;
  was_active_before_deprecation: boolean;
};

export type LandingPage = {
  advantage_summary?: string;
  banner?: string | DirectusFiles;
  benefit_area: string;
  benefit_image?: string | DirectusFiles;
  benefit_title?: string;
  date_created?: string;
  date_updated?: string;
  doctor_name?: string;
  doctor_review?: string;
  doctor_review_area: string;
  doctor_review_image?: string;
  id: number;
  official_check_title?: string;
  origin_and_quality_area: string;
  origin_description?: string;
  origin_image?: string;
  origin_title?: string;
  product_id?: number | Product;
  quality_description?: string;
  status: string;
  title?: string;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type Product = {
  advantages: any[] | ProductAdvantage[];
  benefits: any[] | ProductBenefit[];
  category_id?: number | ProductCategory;
  date_created?: string;
  date_updated?: string;
  description?: string;
  id: number;
  image?: string;
  is_feature?: boolean;
  name?: string;
  price?: number;
  slug?: string;
  social_shares: any[] | ProductSocialShare[];
  status: string;
  stock?: number;
  testimonials: any[] | Testimonials[];
  thumbnails: any[] | ProductFiles[];
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type ProductAdvantage = {
  date_created?: string;
  date_updated?: string;
  description?: string;
  id: number;
  image?: string;
  product_id: number | Product;
  sort?: number;
  status: string;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type ProductArticle = {
  age: string;
  consumption_age?: string;
  date_created?: string;
  date_updated?: string;
  facebook?: string;
  id: number;
  ingredient: string;
  lazada?: string;
  main_ingredient?: string;
  main_uses_image?: string;
  main_video_link?: string;
  mineral_ingredient?: string;
  product_id?: number | Product;
  product_qnas?: any[] | ProductQna[] | null;
  product_useses?: any[] | ProductUses[] | null;
  sendo?: string;
  shop: string;
  shopee?: string;
  slug?: string;
  sort?: number;
  status: string;
  testimonials: any[] | Testimonials[];
  user_created?: string | DirectusUsers;
  user_manual?: string;
  user_updated?: string | DirectusUsers;
  uses: string;
  uses_summary?: string;
  vitamin_ingredient?: string;
};

export type ProductBenefit = {
  date_created?: string;
  date_updated?: string;
  description?: string;
  id: number;
  image?: string;
  product_id?: number | Product;
  sort?: number;
  status: string;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type ProductCategory = {
  date_created?: string;
  date_updated?: string;
  id: number;
  name?: string;
  products: any[] | Product[];
  sort?: number;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type ProductFiles = {
  directus_files_id?: string;
  id: number;
  index?: number;
  product_id?: number | Product;
};

export type ProductQna = {
  answer?: string;
  date_created?: string;
  date_updated?: string;
  id: number;
  image_answer?: string;
  product_article_id?: number | ProductArticle;
  question?: string;
  sort?: number;
  status?: string;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type ProductSocialShare = {
  avatar?: string;
  date_created?: string;
  date_updated?: string;
  id: number;
  image?: string;
  link?: string;
  product_id?: number | Product;
  sort?: number;
  status: string;
  title?: string;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type ProductUses = {
  date_created?: string;
  date_updated?: string;
  id: number;
  image?: string;
  product_article_id?: number | ProductArticle;
  sort?: number;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
  uses_text?: string;
};

export type SolutionBlog = {
  category_id?: number | SolutionCategory;
  content?: string;
  date_created?: string;
  date_updated?: string;
  id: number;
  image?: string;
  introduce?: string;
  slug?: string;
  sort?: number;
  status: string;
  thumbnail?: string;
  title?: string;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type SolutionCategory = {
  blogs: any[] | SolutionBlog[];
  date_created?: string;
  date_updated?: string;
  id: number;
  name?: string;
  slug?: string;
  sort?: number;
  status: string;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type Testimonials = {
  avatar?: string;
  date_created?: string;
  date_updated?: string;
  id: number;
  message?: string;
  name?: string;
  product_article_id?: number | ProductArticle;
  product_id?: number | Product;
  screen_shot?: string;
  sort?: number;
  status: string;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type Preference = {
  address?: string | null;
  company_name?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  factory?: string | null;
  id: number;
  landline_number?: string | null;
  mobile_phone_number?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type CustomDirectusTypes = {
  common_landing_page: CommonLandingPage;
  common_landing_page_files: CommonLandingPageFiles[];
  common_landing_page_files_1: CommonLandingPageFiles1[];
  common_landing_page_files_2: CommonLandingPageFiles2[];
  common_landing_page_files_3: CommonLandingPageFiles3[];
  directus_activity: DirectusActivity[];
  directus_collections: DirectusCollections[];
  directus_dashboards: DirectusDashboards[];
  directus_extensions: DirectusExtensions[];
  directus_fields: DirectusFields[];
  directus_files: DirectusFiles[];
  directus_flows: DirectusFlows[];
  directus_folders: DirectusFolders[];
  directus_migrations: DirectusMigrations[];
  directus_notifications: DirectusNotifications[];
  directus_operations: DirectusOperations[];
  directus_panels: DirectusPanels[];
  directus_permissions: DirectusPermissions[];
  directus_presets: DirectusPresets[];
  directus_relations: DirectusRelations[];
  directus_revisions: DirectusRevisions[];
  directus_roles: DirectusRoles[];
  directus_sessions: DirectusSessions[];
  directus_settings: DirectusSettings;
  directus_shares: DirectusShares[];
  directus_translations: DirectusTranslations[];
  directus_users: DirectusUsers[];
  directus_versions: DirectusVersions[];
  directus_webhooks: DirectusWebhooks[];
  landing_page: LandingPage[];
  product: Product[];
  product_advantage: ProductAdvantage[];
  product_article: ProductArticle[];
  product_benefit: ProductBenefit[];
  product_category: ProductCategory[];
  product_files: ProductFiles[];
  product_qna: ProductQna[];
  product_social_share: ProductSocialShare[];
  product_uses: ProductUses[];
  solution_blog: SolutionBlog[];
  solution_category: SolutionCategory[];
  testimonials: Testimonials[];
  preference: Preference;
};
