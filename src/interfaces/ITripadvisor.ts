export interface ITripadvisor {
    status: boolean
    message: string
    timestamp: number
    data: Data
}

export interface Data {
    totalRecords: number
    totalPages: number
    data: Daum[]
    currentPage: number
}

export interface Daum {
    restaurantsId: string
    locationId: number
    name: string
    averageRating: number
    userReviewCount: number
    currentOpenStatusCategory: string
    currentOpenStatusText: string
    priceTag: string
    hasMenu: boolean
    menuUrl?: string
    isDifferentGeo: boolean
    parentGeoName: string
    distanceTo: any
    awardInfo?: AwardInfo
    isLocalChefItem: boolean
    isPremium: boolean
    isStoryboardPublished: boolean
    establishmentTypeAndCuisineTags: string[]
    offers: Offers
    heroImgUrl: string
    heroImgRawHeight: number
    heroImgRawWidth: number
    squareImgUrl: string
    squareImgRawLength: number
    thumbnail: Thumbnail
    reviewSnippets: ReviewSnippets
}

export interface AwardInfo {
    year: number
    awardType: string
}

export interface Offers {
    hasDelivery?: boolean
    hasReservation?: boolean
    slot1Offer?: Slot1Offer
    slot2Offer: any
    restaurantSpecialOffer?: RestaurantSpecialOffer
}

export interface Slot1Offer {
    canProvideTimeslots: boolean
    canLockTimeslots: boolean
    timeSlots: any[]
    providerId: string
    provider: string
    providerDisplayName: string
    buttonText: string
    offerURL: string
    logoUrl: string
    trackingEvent: string
}

export interface RestaurantSpecialOffer {
    canProvideTimeslots: any
    canLockTimeslots: any
    timeSlots: any[]
    providerId: string
    provider: string
    providerDisplayName: string
    buttonText: any
    offerURL: string
    logoUrl: any
    trackingEvent: any
}

export interface Thumbnail {
    photo: Photo
}

export interface Photo {
    photoSizeDynamic: PhotoSizeDynamic
}

export interface PhotoSizeDynamic {
    maxHeight: number
    maxWidth: number
    urlTemplate: string
}

export interface ReviewSnippets {
    reviewSnippetsList: ReviewSnippetsList[]
}

export interface ReviewSnippetsList {
    reviewText: string
    reviewUrl: string
}
