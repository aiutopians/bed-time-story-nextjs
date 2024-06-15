export enum LanguageEnum {
    ENGLISH = "English",
    CHINESE = "Chinese",
    FRENCH = "French",
    GERMAN = "German",
    ITALIAN = "Italian",
    JAPANESE = "Japanese",
    KOREAN = "Korean",
    SPANISH = "Spanish",
    TAMIL = "Tamil"
}

export enum NoOfWords{
    WORD_500 = 500,
    WORD_750 = 750,
    WORD_1000 = 1000
}

export enum TargetAudienceEnum {
    CHILDREN = "Children",
    ADULTS = "Adults"
}

export const targetAudience = [
    {name : 'Children', value : TargetAudienceEnum.CHILDREN, logo: '👶'},
    {name : 'Adults', value : TargetAudienceEnum.ADULTS, logo: '👦'}
]

export const language = [
    {name : 'English', value : LanguageEnum.ENGLISH},
    {name : 'Chinese', value : LanguageEnum.CHINESE},
    {name : 'French', value : LanguageEnum.FRENCH},
    {name : 'German', value : LanguageEnum.GERMAN},
    {name : 'Italian', value : LanguageEnum.ITALIAN},
    {name : 'Japanese', value : LanguageEnum.JAPANESE},
    {name : 'Korean', value : LanguageEnum.KOREAN},
    {name : 'Spanish', value : LanguageEnum.SPANISH},
    {name : 'Tamil', value : LanguageEnum.TAMIL},
]

export const noOfWords = [
    {name : 'Children', value : NoOfWords.WORD_500 , logo: '👶'},
    {name : 'Adults', value : NoOfWords.WORD_750 , logo: '👦'},
    {name : 'Adults', value : NoOfWords.WORD_1000, logo: '👦'},
]