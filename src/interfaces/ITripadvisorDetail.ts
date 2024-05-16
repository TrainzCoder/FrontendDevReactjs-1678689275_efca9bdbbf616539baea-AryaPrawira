export interface ITripadvisorDetail {
    status: boolean
    message: string
    timestamp: number
    data: Data
}

export interface Data {
    location: Location
    hours: Hours2
    ownerStatus: OwnerStatus
    ownerLikelihood: OwnerLikelihood
    overview: Overview
}

export interface Location {
    location_id: string
    name: string
    latitude: string
    longitude: string
    num_reviews: string
    timezone: string
    location_string: string
    awards: any[]
    doubleclick_zone: string
    preferred_map_engine: string
    raw_ranking: string
    ranking_geo: string
    ranking_geo_id: string
    ranking_position: string
    ranking_denominator: string
    ranking_category: string
    ranking: string
    distance: any
    distance_string: any
    bearing: any
    rating: string
    is_closed: boolean
    open_now_text: string
    is_long_closed: boolean
    price_level: string
    price: string
    description: string
    web_url: string
    write_review: string
    ancestors: Ancestor[]
    category: Category
    subcategory: Subcategory2[]
    parent_display_name: string
    is_jfy_enabled: boolean
    nearest_metro_station: any[]
    phone: string
    website: string
    email: string
    address_obj: AddressObj
    address: string
    hours: Hours
    is_candidate_for_contact_info_suppression: boolean
    cuisine: Cuisine[]
    dietary_restrictions: DietaryRestriction[]
    photo: Photo
    tags: any
    display_hours: DisplayHour[]
}

export interface Ancestor {
    subcategory: Subcategory[]
    name: string
    abbrv: any
    location_id: string
}

export interface Subcategory {
    key: string
    name: string
}

export interface Category {
    key: string
    name: string
}

export interface Subcategory2 {
    key: string
    name: string
}

export interface AddressObj {
    street1: string
    street2: string
    city: string
    state: any
    country: string
    postalcode: string
}

export interface Hours {
    week_ranges: WeekRange[][]
    timezone: string
}

export interface WeekRange {
    open_time: number
    close_time: number
}

export interface Cuisine {
    key: string
    name: string
}

export interface DietaryRestriction {
    key: string
    name: string
}

export interface Photo {
    id: string
    caption: string
    published_date: string
    helpful_votes: string
    is_blessed: boolean
    uploaded_date: string
    images: Images
}

export interface Images {
    small: Small
    thumbnail: Thumbnail
    original: Original
    large: Large
    medium: Medium
}

export interface Small {
    url: string
    width: string
    height: string
}

export interface Thumbnail {
    url: string
    width: string
    height: string
}

export interface Original {
    url: string
    width: string
    height: string
}

export interface Large {
    url: string
    width: string
    height: string
}

export interface Medium {
    url: string
    width: string
    height: string
}

export interface DisplayHour {
    days: string
    times: string[]
}

export interface Hours2 {
    openStatus: string
    openStatusText: string
    hoursTodayText: string
    currentHoursText: string
    allOpenHours: AllOpenHour[]
    addHoursLink: AddHoursLink
}

export interface AllOpenHour {
    days: string
    times: string[]
}

export interface AddHoursLink {
    url: string
    text: string
}

export interface OwnerStatus {
    isVerified: boolean
    isMemberOwner: boolean
    isUserInCountry: boolean
}

export interface OwnerLikelihood {
    isOwner: boolean
    likelihood: string
}

export interface Overview {
    name: string
    detailId: number
    geo: string
    geoId: number
    isOwner: boolean
    links: Links
    location: Location2
    contact: Contact
    rating: Rating
    tags: Tags
    detailCard: DetailCard
}

export interface Links {
    warUrl: string
    addPhotoUrl: string
    ownerAddPhotoUrl: string
}

export interface Location2 {
    latitude: number
    longitude: number
    directionsUrl: string
    landmark: string
    neighborhood: any
}

export interface Contact {
    address: string
    email: string
    phone: string
    website: string
}

export interface Rating {
    primaryRanking: PrimaryRanking
    secondaryRanking: any
    primaryRating: number
    reviewCount: number
    ratingQuestions: RatingQuestion[]
}

export interface PrimaryRanking {
    rank: number
    totalCount: number
    category: string
    geo: string
    url: string
}

export interface RatingQuestion {
    name: string
    rating: number
    icon: string
}

export interface Tags {
    reviewSnippetSections: ReviewSnippetSection[]
}

export interface ReviewSnippetSection {
    heading: string
    reviewSnippets: ReviewSnippet[]
}

export interface ReviewSnippet {
    text: string
    reviewLink: string
}

export interface DetailCard {
    tagTexts: TagTexts
    numericalPrice: string
    improveListingUrl: string
    updateListingUrl: string
    restaurantOwner: RestaurantOwner
}

export interface TagTexts {
    priceRange: PriceRange
    cuisines: Cuisines
    dietaryRestrictions: DietaryRestrictions
    meals: Meals
    features: Features
    establishmentType: EstablishmentType
}

export interface PriceRange {
    tagCategoryId: number
    tags: Tag[]
}

export interface Tag {
    tagId: number
    tagValue: string
}

export interface Cuisines {
    tagCategoryId: number
    tags: Tag2[]
}

export interface Tag2 {
    tagId: number
    tagValue: string
}

export interface DietaryRestrictions {
    tagCategoryId: number
    tags: Tag3[]
}

export interface Tag3 {
    tagId: number
    tagValue: string
}

export interface Meals {
    tagCategoryId: number
    tags: Tag4[]
}

export interface Tag4 {
    tagId: number
    tagValue: string
}

export interface Features {
    tagCategoryId: number
    tags: Tag5[]
}

export interface Tag5 {
    tagId: number
    tagValue: string
}

export interface EstablishmentType {
    tagCategoryId: number
    tags: Tag6[]
}

export interface Tag6 {
    tagId: number
    tagValue: string
}

export interface RestaurantOwner {
    text: any
    tooltip: any
    trackingItemName: string
}
