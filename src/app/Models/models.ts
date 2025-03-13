export class ExplanatoryNoteTest
{
    explanatoryNoteNumber: string = "";
    explanatoryNoteYear: string = "";
    explanatoryNoteModifications: tModification[] = [];
}


export class NumberAndYear
{
    explanatoryNoteNumber: string = "";
    explanatoryNoteYear: string = "";
}


export class ExplanatoryNote {
    explanatoryNoteNumber: string= "";
    explanatoryNoteYear: string= "";
    explanatoryNoteModifications: tModification[] = [];




    issueAuthor: tAuthor | null = null;





    projectDocumentationAuthors: tAuthor[] = [];
    signers: tWorkPerson[] = [];
    items: any[] = [];
    usedAbbreviations: tTextBlock | null = null;
    usedNorms: string[] = [];
    projectDecisionDocuments: tDocument[] = [];
    projectInitialDocuments: tDocument[] = [];
    engineeringSurveyDocuments: tEngineeringSurveyDocument[] = [];
    additionalData: tData[] = [];
    financeSources: tFinanceSources | null = null;
    item: any;
    designerNote: tTextBlock[] = [];
    designerAssurance: tDesignerAssurance | null = null;
    schemaVersion: string ="";
    schemaLink: string = "";
    id: string = "";
    accessRestriction: string = "";
}


export class tAuthor {
    item: any;
    sROMembership: tSRO[] = [];
}


export interface tDocument {
    docType: tDocumentType;
    docName: string;
    docNumber: string;
    docDate: string;
    docIssueAuthor: string;
    docChanges: string;
    items: any[];
    itemsElementName: ItemsChoiceType1[];
}


export interface tEngineeringSurveyDocument {
    docType: tEngineeringSurveyDocumentType;
    docName: string;
    docNumber: string;
    docDate: string;
    fullDocIssueAuthor: tAuthor[];
    docChanges: string;
    file: tFile[];
}

export enum tEngineeringSurveyDocumentType {
    Item0601,
    Item0602,
    Item0603,
    Item0604,
    Item0605,
    Item0606,
    Item0607,
    Item0608,
    Item0609,
    Item0610,
    Item0611,
    Item0699
}

export interface tData {
    dataDescription: string;
    file: tFile[];
}

export interface tFinanceSources {
    items: any[];
    financeComment: string;
}

export enum ItemsChoiceType1 {
    File,
    Included,
    Link
}

export enum tDocumentType {
    Item0101,
    Item0102,
    Item0103,
    Item0199,
    Item0201,
    Item0202,
    Item0204,
    Item0205,
    Item0206,
    Item0207,
    Item0208,
    Item0209,
    Item0299,
    Item0301,
    Item0302,
    Item0303,
    Item0304,
    Item0305,
    Item0306,
    Item0399,
    Item0401,
    Item0402,
    Item0403,
    Item0499,
    Item0501,
    Item0502,
    Item0503,
    Item0599,
    Item0601,
    Item0602,
    Item0603,
    Item0604,
    Item0605,
    Item0606,
    Item0607,
    Item0608,
    Item0609,
    Item0610,
    Item0611,
    Item0699,
    Item0701,
    Item0702,
    Item0703,
    Item0704,
    Item0705,
    Item0706,
    Item0707,
    Item0708,
    Item0709,
    Item0710,
    Item0711,
    Item0712,
    Item0713,
    Item0714,
    Item0715,
    Item0716,
    Item0717,
    Item0718,
    Item0719,
    Item0720,
    Item0721,
    Item0722,
    Item0723,
    Item0724,
    Item0725,
    Item0726,
    Item0727,
    Item0728,
    Item0729,
    Item0730,
    Item0731,
    Item0732,
    Item0733,
    Item0734,
    Item0735,
    Item0736,
    Item0737,
    Item0801,
    Item0802,
    Item0803,
    Item0804,
    Item0805,
    Item0806,
    Item0807,
    Item0808,
    Item0809,
    Item0810,
    Item0811,
    Item0812,
    Item0813,
    Item0814,
    Item0815,
    Item0816,
    Item0817,
    Item0818,
    Item0819,
    Item0820,
    Item0901,
    Item0902,
    Item0999,
    Item1001,
    Item1099,
    Item1101,
    Item1102,
    Item1103,
    Item1104,
    Item1105,
    Item1106,
    Item1199,
    Item1201,
    Item1202,
    Item1203,
    Item1299,
    Item1301,
    Item1302,
    Item1303,
    Item1304,
    Item1305,
    Item1306,
    Item1399,
    Item1401,
    Item1402,
    Item1403,
    Item1404,
    Item1499,
    Item1501,
    Item1502,
    Item1503,
    Item1504,
    Item1505,
    Item1506,
    Item1507,
    Item1508,
    Item1599,
    Item1601,
    Item1602,
    Item1699,
    Item1701,
    Item1799,
    Item1801,
    Item1802,
    Item1803,
    Item1899,
    Item1901,
    Item1902,
    Item1903,
    Item1999,
    Item2001,
    Item2002,
    Item2003,
    Item2004,
    Item2005,
    Item2006,
    Item2007,
    Item2099,
    Item2101,
    Item2102,
    Item2103,
    Item2104,
    Item2105,
    Item2106,
    Item2107,
    Item2108,
    Item2109,
    Item2110,
    Item2111,
    Item2112,
    Item2113,
    Item2199,
    Item2201,
    Item2202,
    Item2203,
    Item2204,
    Item2205,
    Item2299,
    Item2301,
    Item2302,
    Item2399,
    Item2401,
    Item9901,
    Item9902,
    Item9903,
    Item9999
}



export class tModification {
    modificationNumber: string = "";
    modificationDate: string = "";
    modificationNote: string = "";
}

export interface tDesignerAssurance {
    assurance: tTextBlock;
    signer: tWorkPerson;
}

export interface tTextBlock {
    items: any[];
    itemsElementName: ItemsChoiceType[];
    title: string;
}

export interface tImage {
    imageData: string;
    comment: string;
    type: tImageTypes;
}

export enum tImageTypes {
    jpg,
    gif,
    png,
    jpeg
}

export interface tTable {
    titleRow: tCell[][];
    row: tCell[][];
}

export interface tCell {
    align: tAlignTypes;
    alignSpecified: boolean;
    value: string;
}

export enum tAlignTypes {
    left,
    right,
    center
}

export enum ItemsChoiceType {
    Image,
    SubTitle,
    Table,
    Text
}

export interface tWorkPerson {
    familyName: string;
    firstName: string;
    secondName: string;
    position: string;
    engineeringRegistry: tYesNo;
    engineeringRegistrySpecified: boolean;
    constructionRegistry: tYesNo;
    constructionRegistrySpecified: boolean;
}

export enum tYesNo {
    да,
    нет
}

export interface tLinearProjectDocumentContent {
    section2: tProjectDocumentSection;
    section3: tProjectDocumentSection;
    section4: tProjectDocumentSection;
    section5: tProjectDocumentSection;
    section6: tProjectDocumentSection;
    section7: tProjectDocumentSection;
    section8: tProjectDocumentSection;
    section9: tSectionEstimate;
    section10: tOtherDocumentsSection;
}

export interface tProjectDocumentSection {
    items: any[];
}

export interface tProjectDocument {
    docName: string;
    docNumber: string;
    docChanges: string;
    file: tFile[];
    objectIDREFS: string;
}

export interface tFile {
    fileName: string;
    fileFormat: string;
    fileRelativePath: string;
    fileChecksum: string;
    signFile: tSignFile[];
}

export interface tSignFile {
    fileName: string;
    fileFormat: string;
    relativePath: string;
    fileChecksum: string;
}

export interface tProjectDocumentSubSection {
    items: any[];
    name: string;
}

export interface tSectionEstimate {
    estimateExplanatoryNote: tProjectDocumentSection;
    costSummary: tProjectDocumentSection;
    summaryEstimate: tProjectDocumentSection;
    objectLocalEstimates: tProjectDocumentSection;
    costsEstimates: tProjectDocumentSection;
}

export interface tOtherDocumentsSection {
    industrialSafetyDeclaration: tProjectDocumentSection;
    hydraulicStructuresSafetyDeclaration: tProjectDocumentSection;
    eventsList: tProjectDocumentSection;
    otherDocuments: tProjectDocumentSection;
}

export interface tGasNetworksFeatures {
    strengthCalculation: tTextBlock;
    environmentalProtection: tTextBlock;
    fireSafety: tTextBlock;
    operationalSafety: tTextBlock;
    perairFrequency: tTextBlock;
}

export interface tRoute {
    name: string;
    note: tTextBlock;
}

export interface tRoutes {
    routesNote: tTextBlock;
    route: tRoute[];
}

export interface tLinearObject {
    name: string;
    constructionType: tConstructionType;
    constructionDuration: number;
    constructionDates: tConstructionDates;
    address: tAddress;
    finishAddress: tAddress;
    functions: tFunctions;
    functionsFeatures: tTextBlock;
    powerIndicator: tTEI[];
    tEI: tTEI[];
    dangerousIndustrialObject: tDangerIndustrialClass;
    linearObjectCategory: tTextBlock;
    linearObjectClass: tTextBlock;
    linearObjectNote: tTextBlock;
    items: any[];
    climateConditions: tClimateConditions;
    routes: tRoutes;
    resources: tResources;
    resourceUseInfo: tTextBlock;
    renewableSourceInfo: tTextBlock;
    landCategory: tLandCategory;
    landInfo: tLandInfo;
    patentsUsed: tTextBlock;
    specialRequirements: tTextBlock;
    softwareUsed: tSoftwareUsed;
    stagesInfo: tStagesInfo;
    destroyFunds: tTextBlock;
    industrialSafetyLinks: tProjectDocumentationLink[];
    landReclamationLink: tTextBlock;
    gasNetworksFeatures: tGasNetworksFeatures;
    engineeringTerritoryProtection: tTextBlock;
    projectDocumentation: tLinearProjectDocumentContent;
    model: tModel;
    objectID: string;
    placement: tPlacement;
    dangerousAndComplex: tDangerousAndComplex;
    dangerousAndComplexSpecified: boolean;
    unique: tUnique;
    uniqueSpecified: boolean;
}

export enum tConstructionType {
    Item1,
    Item2,
    Item3,
    Item4,
    Item5
}

export interface tConstructionDates {
    beginDate: string;
    beginDateSpecified: boolean;
    endDate: string;
    endDateSpecified: boolean;
    operationDate: string;
    operationDateSpecified: boolean;
}

export interface tAddress {
    country: string;
    region: tRegionsRF;
    district: string;
    city: string;
    settlement: string;
    street: string;
    building: string;
    room: string;
    note: string;
}

export enum tRegionsRF {
    Item00,
    Item01,
    Item02,
    Item03,
    Item04,
    Item05,
    Item06,
    Item07,
    Item08,
    Item09,
    Item10,
    Item11,
    Item12,
    Item13,
    Item14,
    Item15,
    Item16,
    Item17,
    Item18,
    Item19,
    Item20,
    Item21,
    Item22,
    Item23,
    Item24,
    Item25,
    Item26,
    Item27,
    Item28,
    Item29,
    Item30,
    Item31,
    Item32,
    Item33,
    Item34,
    Item35,
    Item36,
    Item37,
    Item38,
    Item39,
    Item40,
    Item41,
    Item42,
    Item43,
    Item44,
    Item45,
    Item46,
    Item47,
    Item48,
    Item49,
    Item50,
    Item51,
    Item52,
    Item53,
    Item54,
    Item55,
    Item56,
    Item57,
    Item58,
    Item59,
    Item60,
    Item61,
    Item62,
    Item63,
    Item64,
    Item65,
    Item66,
    Item67,
    Item68,
    Item69,
    Item70,
    Item71,
    Item72,
    Item73,
    Item74,
    Item75,
    Item76,
    Item77,
    Item78,
    Item79,
    Item83,
    Item86,
    Item87,
    Item89,
    Item91,
    Item92,
    Item80,
    Item81,
    Item84,
    Item85
}

export interface tFunctions {
    functionsNote: string;
    functionsClass: string;
    productsNote: tTextBlock;
}

export interface tTEI {
    name: string;
    measure: tOKEI;
    value: string;
    oldValue: string;
}

export enum tOKEI {
    Item,
    Item003,
    Item004,
    Item005,
    Item006,
    Item008,
    Item009,
    Item039,
    Item041,
    Item043,
    Item047,
    Item050,
    Item051,
    Item053,
    Item055,
    Item058,
    Item059,
    Item061,
    Item071,
    Item073,
    Item075,
    Item109,
    Item110,
    Item111,
    Item112,
    Item113,
    Item118,
    Item122,
    Item126,
    Item131,
    Item132,
    Item133,
    Item159,
    Item160,
    Item161,
    Item162,
    Item163,
    Item166,
    Item168,
    Item170,
    Item173,
    Item181,
    Item185,
    Item206,
    Item212,
    Item214,
    Item215,
    Item222,
    Item223,
    Item227,
    Item228,
    Item230,
    Item243,
    Item245,
    Item246,
    Item247,
    Item260,
    Item263,
    Item264,
    Item270,
    Item271,
    Item273,
    Item274,
    Item280,
    Item281,
    Item282,
    Item283,
    Item284,
    Item288,
    Item289,
    Item290,
    Item291,
    Item292,
    Item294,
    Item296,
    Item297,
    Item298,
    Item300,
    Item301,
    Item302,
    Item304,
    Item305,
    Item306,
    Item308,
    Item309,
    Item310,
    Item312,
    Item314,
    Item316,
    Item323,
    Item324,
    Item327,
    Item328,
    Item330,
    Item331,
    Item333,
    Item335,
    Item349,
    Item354,
    Item355,
    Item356,
    Item359,
    Item360,
    Item361,
    Item362,
    Item364,
    Item365,
    Item366,
    Item368,
    Item499,
    Item533,
    Item596,
    Item598,
    Item599,
    Item616,
    Item625,
    Item626,
    Item630,
    Item641,
    Item657,
    Item683,
    Item704,
    Item715,
    Item730,
    Item732,
    Item733,
    Item734,
    Item735,
    Item736,
    Item737,
    Item740,
    Item745,
    Item778,
    Item780,
    Item781,
    Item796,
    Item797,
    Item798,
    Item799,
    Item800,
    Item801,
    Item802,
    Item820,
    Item821,
    Item831,
    Item833,
    Item841,
    Item845,
    Item847,
    Item852,
    Item859,
    Item861,
    Item863,
    Item865,
    Item867,
    Item018,
    Item019,
    Item020,
    Item048,
    Item049,
    Item054,
    Item056,
    Item057,
    Item060,
    Item062,
    Item063,
    Item064,
    Item081,
    Item082,
    Item083,
    Item084,
    Item085,
    Item086,
    Item087,
    Item088,
    Item089,
    Item114,
    Item115,
    Item116,
    Item119,
    Item120,
    Item121,
    Item123,
    Item124,
    Item125,
    Item127,
    Item128,
    Item129,
    Item130,
    Item165,
    Item167,
    Item169,
    Item171,
    Item172,
    Item175,
    Item176,
    Item177,
    Item178,
    Item179,
    Item207,
    Item226,
    Item231,
    Item232,
    Item233,
    Item234,
    Item235,
    Item236,
    Item237,
    Item238,
    Item239,
    Item241,
    Item242,
    Item248,
    Item249,
    Item250,
    Item251,
    Item252,
    Item253,
    Item254,
    Item255,
    Item256,
    Item257,
    Item258,
    Item287,
    Item313,
    Item317,
    Item337,
    Item338,
    Item339,
    Item352,
    Item353,
    Item383,
    Item384,
    Item385,
    Item386,
    Item387,
    Item388,
    Item414,
    Item421,
    Item423,
    Item424,
    Item427,
    Item449,
    Item450,
    Item451,
    Item479,
    Item510,
    Item511,
    Item512,
    Item513,
    Item514,
    Item515,
    Item516,
    Item521,
    Item522,
    Item534,
    Item535,
    Item536,
    Item537,
    Item538,
    Item539,
    Item540,
    Item541,
    Item542,
    Item543,
    Item544,
    Item545,
    Item546,
    Item547,
    Item548,
    Item550,
    Item552,
    Item553,
    Item554,
    Item555,
    Item556,
    Item557,
    Item558,
    Item559,
    Item2541,
    Item2543,
    Item561,
    Item562,
    Item563,
    Item639,
    Item640,
    Item642,
    Item643,
    Item644,
    Item661,
    Item673,
    Item698,
    Item699,
    Item709,
    Item724,
    Item729,
    Item744,
    Item746,
    Item751,
    Item761,
    Item762,
    Item775,
    Item776,
    Item779,
    Item782,
    Item792,
    Item793,
    Item794,
    Item808,
    Item810,
    Item812,
    Item836,
    Item837,
    Item838,
    Item839,
    Item840,
    Item868,
    Item869,
    Item870,
    Item871,
    Item872,
    Item873,
    Item874,
    Item875,
    Item876,
    Item877,
    Item878,
    Item879,
    Item880,
    Item881,
    Item882,
    Item883,
    Item884,
    Item885,
    Item886,
    Item887,
    Item888,
    Item889,
    Item890,
    Item891,
    Item892,
    Item893,
    Item894,
    Item895,
    Item896,
    Item897,
    Item898,
    Item899,
    Item900,
    Item901,
    Item902,
    Item903,
    Item904,
    Item905,
    Item906,
    Item907,
    Item908,
    Item909,
    Item910,
    Item911,
    Item912,
    Item913,
    Item914,
    Item915,
    Item916,
    Item917,
    Item918,
    Item920,
    Item921,
    Item922,
    Item923,
    Item924,
    Item925,
    Item930,
    Item937,
    Item949,
    Item950,
    Item951,
    Item952,
    Item953,
    Item954,
    Item955,
    Item956,
    Item957,
    Item958,
    Item959,
    Item960,
    Item961,
    Item962,
    Item963,
    Item964,
    Item965,
    Item966,
    Item967,
    Item968,
    Item969,
    Item970,
    Item971,
    Item972,
    Item973,
    Item974,
    Item975,
    Item976,
    Item977,
    Item978,
    Item979,
    Item980,
    Item981,
    Item982,
    Item983,
    Item017,
    Item045,
    Item077,
    Item079,
    Item135,
    Item136,
    Item137,
    Item138,
    Item139,
    Item140,
    Item141,
    Item142,
    Item143,
    Item144,
    Item145,
    Item146,
    Item147,
    Item148,
    Item149,
    Item150,
    Item151,
    Item152,
    Item153,
    Item154,
    Item182,
    Item183,
    Item184,
    Item186,
    Item187,
    Item188,
    Item189,
    Item190,
    Item191,
    Item192,
    Item193,
    Item194,
    Item195,
    Item196,
    Item197,
    Item198,
    Item199,
    Item200,
    Item201,
    Item202,
    Item213,
    Item275,
    Item638,
    Item731,
    Item738,
    Item835,
    Item851,
    Item853,
    Item2545,
    Item2547,
    Item2551,
    Item2552,
    Item2561,
    Item2571,
    Item2581,
    Item276,
    Item3135,
    Item7923,
    Item9061,
    Item9062,
    Item9557,
    Item9642,
    Item9802,
    Item984,
    Item985,
    Item986,
    Item987,
    Item988,
    Item989,
    Item990,
    Item991,
    Item2553,
    Item2554,
    Item2555,
    Item2556,
    Item2557,
    Item2558,
    Item3831,
    Item5401,
    Item5423,
    Item5451,
    Item5562,
    Item6421,
    Item6422,
    Item6424,
    Item8361,
    Item8751,
    Item9111,
    Item9113,
    Item9245,
    Item9246,
    Item9491,
    Item9501,
    Item9641,
    Item9803,
    Item9805,
    Item6423,
    Item508,
    Item164,
    Item303,
    Item307,
    Item320,
    Item9910,
    Item9911,
    Item9912,
    Item9913,
    Item9914,
    Item9915,
    Item9916,
    Item9917,
    Item9918,
    Item9920,
    Item9921,
    Item9922,
    Item9923,
    Item9924,
    Item9925,
    Item9926,
    Item9927,
    Item9930,
    Item9931,
    Item9940,
    Item9941,
    Item9950,
    Item9951,
    Item9960,
    Item9961,
    Item9962,
    Item9970,
    Item9971,
    Item9980,
    Item9981,
    Item9982,
    Item9983,
    Item9985,
    Item9986,
    Item9987,
    Item9988,
    Item9990,
    Item9991,
    Item728,
    Item509,
    Item277,
    Item278,
    Item279,
    Item293,
    Item295,
    Item351,
    Item318,
    Item319,
    Item321,
    Item348,
    Item350,
    Item2311,
    Item2312,
    Item2313,
    Item2314,
    Item2315,
    Item2316,
    Item2351,
    Item2352,
    Item2353,
    Item2354,
    Item2355,
    Item2356,
    Item2357,
    Item426,
    Item747,
    Item340,
    Item341,
    Item9823,
    Item9822,
    Item3181,
    Item3231
}

export enum tDangerIndustrialClass {
    Неотноситсякопаснымпроизводственнымобъектам,
    I,
    II,
    III,
    IV
}

export enum tFireDangerCategory {
    Категориянеустанавливается,
    А,
    Б,
    В,
    Г,
    Д
}

export interface tObjectParts1 {
    items: any[];
}

export interface tComplexPart {
    name: string;
    address: tAddress[];
    functionsClass: string;
    functionsFeatures: tTextBlock;
    powerIndicator: tTEI[];
    tEI: tTEI[];
    dangerousIndustrialObject: tDangerIndustrialClass;
    objectParts: any[];
    model: tModel;
    objectID: string;
}

export interface tOKS {
    name: string;
    address: tAddress[];
    functionsClass: string;
    functionsFeatures: tTextBlock;
    powerIndicator: tTEI[];
    tEI: tTEI[];
    energyEfficiency: tEnergyEfficiency;
    dangerousIndustrialObject: tDangerIndustrialClass;
    fireDangerCategory: tFireDangerCategory;
    peoplePermanentStay: tTextBlock;
    responsibilityLevel: tResponsibilityLevel;
    model: tModel;
    objectID: string;
}

export interface tEnergyEfficiency {
    energyEfficiencyClass: tEfficiencyClass;
    energyEfficiencyImproving: tTextBlock;
}

export enum tEfficiencyClass {
    A,
    A1,
    A2,
    B,
    C,
    D,
    E,
    F,
    G
}

export enum tResponsibilityLevel {
    повышенный,  
    нормальный, 
    пониженный   
}

export interface tModel {
    description: string;
    modelFile: tModelFile[];
}

export interface tModelFile {
    fileName: string;
    fileFormat: tModelFormat;
    fileRelativePath: string;
    fileChecksum: string;
    signFile: tSignFile[];
    description: string;
}

export enum tModelFormat {
    IFC,
    XML,
    LandXML
}

export interface tClimateConditions {
    climateNote: tTextBlock;
    dangerousNatureProcesses: tTextBlock;
    climateDistrict: tClimateDistrict[];
    geologicalConditions: tGeologicalConditions[];
    windDistrict: tWindDistrict[];
    snowDistrict: tSnowDistrict[];
    seismicActivity: tSeismicActivity[];
}

export enum tClimateDistrict {
    /// <remarks/>
I,

/// <remarks/>
IА,

/// <remarks/>
IБ,

/// <remarks/>
IВ,

/// <remarks/>
IГ,

/// <remarks/>
IД,

/// <remarks/>
II,

/// <remarks/>
IIА,

/// <remarks/>
IIБ,

/// <remarks/>
IIВ,

/// <remarks/>
IIГ,

/// <remarks/>
III,

/// <remarks/>
IIIА,

/// <remarks/>
IIIБ,

/// <remarks/>
IIIВ,

/// <remarks/>
IV,

/// <remarks/>
IVА,

/// <remarks/>
IVБ,

/// <remarks/>
IVВ,

/// <remarks/>
IVГ
}

export enum tGeologicalConditions {
    I,
    II,
    III
}

export enum tWindDistrict {    
    I,
    II,
    III,
    IV,
    V,
    VI,
    VII
}

export enum tSnowDistrict {
    I,
    II,
    III,
    IV,
    V,
    VI,
    VII,
    VIII
}

export enum tSeismicActivity {
    Item5,
    Item6,
    Item7,
    Item8,
    Item9,
    Item10
}

export interface tResources {
    note: tTextBlock;
    resource: tResource[];
}

export interface tResource {
    name: string;
    measure: tOKEI;
    value: string;
}

export enum tLandCategory {
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    Item7
}

export interface tLandInfo {
    commonLandInfo: tTextBlock;
    landAreaInfo: tLandAreaInfo[];
}

export interface tLandAreaInfo {
    cadastralNumber: string;
    landCategory: tLandCategory;
    usingNote: string;
}

export interface tSoftwareUsed {
    softwareNote: tTextBlock;
    software: tSoftware[];
}

export interface tSoftware {
    name: string;
    version: string;
    usingNote: string;
}

export interface tStagesInfo {
    reasonNote: tTextBlock;
    stage: tStage[];
}

export interface tStage {
    number: string;
    beginDate: string;
    beginDateSpecified: boolean;
    endDate: string;
    endDateSpecified: boolean;
    operationDate: string;
    operationDateSpecified: boolean;
    note: tTextBlock;
}

export interface tProjectDocumentationLink {
    docNumber: string;
    docSectionLink: string;
}

export enum tPlacement {
    Item1,
    Item2
}

export enum tDangerousAndComplex {
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    Item7,
    Item8,
    Item9,
    Item10,
    Item11,
    Item12,
    Item13,
    Item14
}

export enum tUnique {
    Item1,
    Item2,
    Item3,
    Item4
}

export interface tMonitoringPrograms {
    geotechnicalMonitoring: tTextBlock;
    hydrogeologicalMonitoring: tTextBlock;
    seismologicalMonitoring: tTextBlock;
    meteorologicalMonitoring: tTextBlock;
    aerologicalMonitoring: tTextBlock;
    hydrologicalMonitoring: tTextBlock;
    geodynamicalMonitoring: tTextBlock;
    technogenicMonitoring: tTextBlock;
}

export interface tNuclearPlantFeatures {
    objectList: tTextBlock;
    nuclearSafety: tTextBlock;
    operationalLimits: tTextBlock;
    nuclearPlantControl: tTextBlock;
    reactorPlant: tTextBlock;
    nuclearSafitySoftware: tTextBlock;
    monitoringPrograms: tMonitoringPrograms;
}

export interface tIndustrialObject {
    name: string;
    constructionType: tConstructionType;
    constructionDuration: number;
    constructionDates: tConstructionDates;
    address: tAddress;
    functions: tFunctions;
    functionsFeatures: tTextBlock;
    powerIndicator: tTEI[];
    tEI: tTEI[];
    energyEfficiency: tEnergyEfficiency;
    dangerousIndustrialObject: tDangerIndustrialClass;
    items: any[];
    climateConditions: tClimateConditions;
    resources: tResources;
    rawResources: tResources;
    resourceUseInfo: tTextBlock;
    renewableSourceInfo: tTextBlock;
    landCategory: tLandCategory;
    landInfo: tLandInfo;
    landFunds: tTextBlock;
    patentsUsed: tTextBlock;
    specialRequirements: tTextBlock;
    softwareUsed: tSoftwareUsed;
    stagesInfo: tStagesInfo;
    destroyFunds: tTextBlock;
    energyEfficiencyLinks: tProjectDocumentationLink[];
    industrialSafetyLinks: tProjectDocumentationLink[];
    landReclamationLink: tTextBlock;
    nuclearPlantFeatures: tNuclearPlantFeatures;
    projectDocumentation: tNonLinearProjectDocumentContent;
    model: tModel;
    objectID: string;
    placement: tPlacement;
    dangerousAndComplex: tDangerousAndComplex;
    dangerousAndComplexSpecified: boolean;
    unique: tUnique;
    uniqueSpecified: boolean;
}

export interface tNonLinearProjectDocumentContent {
    section2: tProjectDocumentSection;
    section3: tProjectDocumentSection;
    section4: tProjectDocumentSection;
    section5: tSection5;
    section6: tProjectDocumentSection;
    section7: tProjectDocumentSection;
    section8: tProjectDocumentSection;
    section9: tProjectDocumentSection;
    section10: tProjectDocumentSection;
    section11: tProjectDocumentSection;
    section12: tSectionEstimate;
    section13: tOtherDocumentsSection;
}

export interface tSection5 {
    electricitySupply: tProjectDocumentSection;
    waterSupply: tProjectDocumentSection;
    waterRemoval: tProjectDocumentSection;
    heatingVentilation: tProjectDocumentSection;
    communication: tProjectDocumentSection;
    gasSupply: tProjectDocumentSection;
}

export interface tNonIndustrialObject {
    name: string;
    constructionType: tConstructionType;
    constructionDuration: number;
    constructionDates: tConstructionDates;
    address: tAddress;
    functions: tFunctions;
    functionsFeatures: tTextBlock;
    powerIndicator: tTEI[];
    tEI: tTEI[];
    energyEfficiency: tEnergyEfficiency;
    items: any[];
    climateConditions: tClimateConditions;
    resources: tResources;
    renewableSourceInfo: tTextBlock;
    landCategory: tLandCategory;
    landInfo: tLandInfo;
    landFunds: tTextBlock;
    patentsUsed: tTextBlock;
    specialRequirements: tTextBlock;
    staffNote: tTextBlock;
    softwareUsed: tSoftwareUsed;
    stagesInfo: tStagesInfo;
    destroyFunds: tTextBlock;
    energyEfficiencyLinks: tProjectDocumentationLink[];
    landReclamationLink: tTextBlock;
    projectDocumentation: tNonLinearProjectDocumentContent;
    model: tModel;
    objectID: string;
    placement: tPlacement;
    dangerousAndComplex: tDangerousAndComplex;
    dangerousAndComplexSpecified: boolean;
    unique: tUnique;
    uniqueSpecified: boolean;
}

export interface tPrivateSource {
    sourceRatio: number;
    sourceRatioSpecified: boolean;
}

export interface tStateCustomerSource {
    owner: tTechnicalCustomer;
    sourceRatio: number;
    sourceRatioSpecified: boolean;
}

export interface tTechnicalCustomer {
    item: any;
    sROMembership: tSRO[];
}

export interface tForeignOrganization {
    orgFullName: string;
    orgINN: string;
    orgKPP: string;
    address: tAddress;
    email: string;
}

export interface tOrganization {
    orgFullName: string;
    orgOGRN: string;
    orgINN: string;
    orgKPP: string;
    address: tAddress;
    email: string;
}


export interface tIP {
    familyName: string;
    firstName: string;
    secondName: string;
    oGRNIP: string;
    postAddress: tPostAddress;
    email: string;
}


export interface tPostAddress {
    country: string;
    region: tRegionsRF;
    postIndex: string;
    district: string;
    city: string;
    settlement: string;
    street: string;
    building: string;
    room: string;
    note: string;
}


export class tSRO {
    sROType: tSROType = tSROType.Саморегулируемаяорганизациявобластиархитектурностроительногопроектирования;
    value: string = "";
}


export enum tSROType {
    Саморегулируемаяорганизациявобластиинженерныхизысканий,   
    Саморегулируемаяорганизациявобластиархитектурностроительногопроектирования,
    Саморегулируемаяорганизациявобластистроительства
}









export class SROType
{
    public name : string ="";
    public type : tSROType = tSROType.Саморегулируемаяорганизациявобластиархитектурностроительногопроектирования;

    constructor(name : string, type : tSROType)
    {
        this.name = name;
        this.type = type;
    }
}


export const SROTypesArray : SROType[] = [
    new SROType(
         "Саморегулируемая организация в области инженерных изысканий",
          tSROType.Саморегулируемаяорганизациявобластиинженерныхизысканий
        ),
    new SROType( 
        "Саморегулируемая организация в области архитектурно-строительного проектирования",
         tSROType.Саморегулируемаяорганизациявобластиархитектурностроительногопроектирования
        ),
    new SROType( 
        "Саморегулируемая организация в области строительства",
         tSROType.Саморегулируемаяорганизациявобластистроительства
        )
];


export class SroData
{
    public sroNumber : string = "";
    public sroTypeName : string = "";
}


export enum OrganizationEnum
{
    Юридическоелицо,
    Иностранноеюридическоелицопредставительствофилиал,
    Индивидуальныйпредприниматель
}


export class OrganizationType
{
    public name : string ="";
    public type : OrganizationEnum = OrganizationEnum.Юридическоелицо;

    
    constructor(name : string, type : OrganizationEnum)
    {
        this.name = name;
        this.type = type;
    }
}


export const OrganizationTypesArray : OrganizationType[] = [
    new OrganizationType(
         "Юридическое лицо",
          OrganizationEnum.Юридическоелицо
        ),
    new OrganizationType( 
        "Иностранное юридическое лицо (представительство, филиал)",
         OrganizationEnum.Иностранноеюридическоелицопредставительствофилиал
        ),
    new OrganizationType( 
        "Индивидуальный предприниматель",
         OrganizationEnum.Индивидуальныйпредприниматель
        )
];


export class tOrganization {
    orgFullName: string = "";
    orgOGRN: string = "";
    orgINN: string = "";
    orgKPP: string = "";
    address: tAddress = new tAddress();
    email: string = "";
}


export class tForeignOrganization {
    orgFullName: string = "";
    orgINN: string = "";
    orgKPP: string = "";
    address: tAddress = new tAddress();
    email: string = "";
}


export class tIP {
    familyName: string= "";
    firstName: string= "";
    secondName: string= "";
    oGRNIP: string= "";
    postAddress: tPostAddress = new tPostAddress();
    email: string= "";
}


export class tAddress {
    country: string = "";
    region: tRegionsRF = tRegionsRF.Item00;
    district: string = "";
    city: string = "";
    settlement: string = "";
    street: string = "";
    building: string = "";
    room: string = "";
    note: string = "";
}


export class tPostAddress {
    country: string = "";
    region: tRegionsRF = tRegionsRF.Item00;
    postIndex: string = "";
    district: string = "";
    city: string = "";
    settlement: string = "";
    street: string = "";
    building: string = "";
    room: string = "";
    note: string = "";
}


export class Region
{
    public name : string = "";
    public number : string = "";

    
    constructor(name : string, number : string)
    {
        this.name = name;
        this.number = number;
    }
}