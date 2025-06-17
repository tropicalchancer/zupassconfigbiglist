// Define ticket type names
// This type defines all the different groups that can verify with Zupass
// We're adding "ZuArchitects" as a new group
export type TicketTypeName = "Zuzalu" | "ZuConnect" | "Vitalia" | "ZuArchitects" | "ZuVillageGeorgia" | "EdgeEsmeralda" | "EdgeEsmeraldaLocal" | "Zanzalu" | "ETHBerlin04" | "ETHPrague" | "BM" | "MegaZu24" | "ShanhaiWooCM" | "EdgeCityDenver" | "ZuThailand"

// Define the whitelisted tickets configuration
// This object maps each group to an array of valid tickets for that group
export const whitelistedTickets: Record<
  TicketTypeName,
  Array<{
    eventId: string      // Unique identifier for the event
    productId: string    // Unique identifier for the ticket type
    eventName?: string   // Human-readable event name
    productName?: string // Human-readable ticket type name
    pcdType?: string     // Type of proof (usually "eddsa-ticket-pcd")
    publicKey: [string, string] // Public key pair for verifying the proof
  }>
> = {
  // ==============================================
  // 🏰 ZUZALU
  // ==============================================
  Zuzalu: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "5de90d09-22db-40ca-b3ae-d934573def8b",
      eventName: "Zuzalu",
      productId: "5ba4cd9e-893c-4a4a-b15b-cf36ceda1938",
      productName: "Resident",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "5de90d09-22db-40ca-b3ae-d934573def8b",
      eventName: "Zuzalu",
      productId: "10016d35-40df-4033-a171-7d661ebaccaa",
      productName: "Organizer",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "5de90d09-22db-40ca-b3ae-d934573def8b",
      eventName: "Zuzalu",
      productId: "53b518ed-e427-4a23-bf36-a6e1e2764256",
      productName: "Visitor",
    },
  ],

  // ==============================================
  // 🔗 ZUCONNECT
  // ==============================================
  ZuConnect: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "91312aa1-5f74-4264-bdeb-f4a3ddb8670c",
      eventName: "ZuConnect",
      productId: "cc9e3650-c29b-4629-b275-6b34fc70b2f9",
      productName: "Resident",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "54863995-10c4-46e4-9342-75e48b68d307",
      eventName: "ZuConnect",
      productId: "d2123bf9-c027-4851-b52c-d8b73fc3f5af",
      productName: "First Week",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "797de414-2aec-4ef8-8655-09df7e2b6cc6",
      eventName: "ZuConnect",
      productId: "d3620f38-56a9-4235-bea8-0d1dba6bb623",
      productName: "Scholarship",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "f7370f63-b9ae-480c-9ded-0663f1922bef",
      eventName: "ZuConnect",
      productId: "0179ed5b-f265-417c-aeaa-ac61a525c6b0",
      productName: "Organizer",
    },
  ],

  // ==============================================
  // 🌱 VITALIA
  // ==============================================
  Vitalia: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "0d3388a18b89dd012cb965267ab959a6ca68f7e79abfdd5de5e3e80f86821a0d",
        "0babbc67ab5da6c9245137ae75461f64a90789ae5abf3737510d5442bbfa3113",
      ],
      eventId: "9ccc53cb-3b0a-415b-ab0d-76cfa21c72ac",
      eventName: "Vitalia",
      productId: "cd3f2b06-e520-4eff-b9ed-c52365c60848",
      productName: "Resident",
    },
  ],

  // ==============================================
  // 🏛️ ZUARCHITECTS
  // ==============================================
  ZuArchitects: [
    {
      // Configuration for the "architect" ticket
      pcdType: "eddsa-ticket-pcd", // Standard proof type for Zupass tickets
      publicKey: [
        // Public key pair used to verify the proof
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "6fdddc6c-0f84-5176-b950-1107550be180", // Unique ID for zu-architects event
      eventName: "zu-architects", // Human-readable event name
      productId: "872e8b73-20b7-50bd-81f8-e31d59ec58c5", // Unique ID for architect ticket
      productName: "architect" // Human-readable ticket type
    },
    {
      // Configuration for the "speaker" ticket
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        // Same public key pair as architect (they're from the same event)
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "6fdddc6c-0f84-5176-b950-1107550be180", // Same event ID as architect
      eventName: "zu-architects",
      productId: "90344f48-a213-59ba-9f84-77e8094043e3", // Unique ID for speaker ticket
      productName: "Speaker"
    }
  ],

  // ==============================================
  // ��️ ZUVILLAGE GEORGIA
  // ==============================================
  ZuVillageGeorgia: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "6f5f194b-97b5-5fe9-994d-0998f3eacc75",
      eventName: "ZuVillage Georgia",
      productId: "aecf9f84-b92f-5b40-8541-cbb48f4d6267",
      productName: "Contributor"
    }
  ],

   // ==============================================
  // 🌅 EDGE ESMERALDA
  // ==============================================
  EdgeEsmeraldaLocal: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "63502757-b6fc-4a98-8bbb-76cb901d63fe",
      eventName: "Edge Esmeralda Local",
      productId: "08bae5ef-3686-4280-8631-cc63792c2a77",
      productName: "Resident"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "63502757-b6fc-4a98-8bbb-76cb901d63fe",
      eventName: "Edge Esmeralda Local",
      productId: "81cdaac0-8970-4073-a328-6d595276a361",
      productName: "Supporter"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "63502757-b6fc-4a98-8bbb-76cb901d63fe",
      eventName: "Edge Esmeralda Local",
      productId: "33a4ed92-d1ba-49b4-91e7-4f92cd603e48",
      productName: "Patron"
    }
  ],


  EdgeEsmeralda: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "21c7db2e-08e3-4234-9a6e-386a592d63c8",
      eventName: "Edge Esmeralda",
      productId: "e669fdde-a8cc-4aa2-af5e-79f6f12378a0",
      productName: "Issued"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "21c7db2e-08e3-4234-9a6e-386a592d63c8",
      eventName: "Edge Esmeralda",
      productId: "e0e95c9d-090c-41e7-bcd5-b7d8a518cf42",
      productName: "Scholar - Week 2"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "21c7db2e-08e3-4234-9a6e-386a592d63c8",
      eventName: "Edge Esmeralda",
      productId: "e9e0338b-c2ef-470a-a98e-ad7ee21a183a",
      productName: "Weekend Day Ticket"
    }
  ],

  // ==============================================
  // 🏝️ ZANZALU 2024
  // ==============================================
  Zanzalu: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "998af319-ac17-5505-b11d-76b497418adc",
      eventName: "Zanzalu 2024",
      productId: "2c4c93f0-7739-53b3-aa9b-9c09c2a31c6d",
      productName: "Resident"
    }
  ],

  // ==============================================
  // 🏙️ ETHBERLIN04
  // ==============================================
  ETHBerlin04: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "caa5cb88-19cc-4ee2-bf3d-6d379ce5e611",
      productName: "Team"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "e6a44839-76f5-4a47-8b3b-bb95ea6fc3cc",
      productName: "Hacker"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "a28bfaa9-2843-48b9-9200-f12dae4a483f",
      productName: "Mentor"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "beb248b4-9ef8-422f-b475-e94234721dc1",
      productName: "Judge"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "beb248b4-9ef8-422f-b475-e94234721dc2",
      productName: "Student"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "ceb248b4-9ef8-422f-b475-e94234721dc2",
      productName: "Scanner"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "deb248b4-9ef8-422f-b475-e94234721dc2",
      productName: "Press"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "eeb248b4-9ef8-422f-b475-e94234721dc2",
      productName: "swagscanner"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "eeb248b4-9ef8-422f-b475-e94234721dc5",
      productName: "Volunteer"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "eeb248b4-9ef8-422f-b475-e94234721dc3",
      productName: "Speaker"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
      eventName: "ETHBerlin04",
      productId: "eeb248b4-9ef8-422f-b475-e94234721dc4",
      productName: "Experiences"
    }
  ],

  // ==============================================
  // 🏰 ETHPRAGUE 2024
  // ==============================================
  ETHPrague: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "c0b7645d-1b03-47e7-98e7-4c30bb9869c0",
      productName: "Food Voucher"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "a352bce4-8d65-4768-8ddf-a955431b9e34",
      productName: "Volunteer"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "c2306074-d6e1-4c08-82d0-022849f3ce37",
      productName: "Early Bird"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "ced4eac5-715c-4081-aaa5-27e2b0a426fd",
      productName: "Regular Ticket"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "e5ac8393-8a7f-4a4a-8792-541418c6151b",
      productName: "Hacker"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "f0cd739c-313d-466a-827d-00b2cb8bc1e7",
      productName: "Sponsor"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "955d452b-e441-466b-9071-fab575150864",
      productName: "Student / Academic"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "15621325-a7fd-4651-b961-524445f7e9bb",
      productName: "test ticket"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "eb0e5421-f506-4daa-8eb1-953fce0a4ccb",
      productName: "Mergooor Pass"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "7ac1a055-4e9d-445c-af6e-491941f8822c",
      productName: "Speaker"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "408b3dc0-864e-4e87-9ce4-5eebbb672361",
      productName: "Honored Guest"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "408b3dc0-864e-4e87-9ce4-5eebbb672362",
      productName: "Regular Ticket (Comp)"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "2ac1a055-4e9d-445c-af6e-491941f8822c",
      productName: "Press"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "608b3dc0-864e-4e87-9ce4-5eebbb672361",
      productName: "Crew"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "508b3dc0-864e-4e87-9ce4-5eebbb672362",
      productName: "Food Vendor A"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "408b3dc0-864e-4e87-9ce4-5eebbb672363",
      productName: "Community & Friends"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "508b3dc0-864e-4e87-9ce4-5eebbb67236b",
      productName: "Food Vendor B"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "508313ea-f16b-4729-bdf0-281c64493ca9",
      eventName: "ETHPrague 2024",
      productId: "508b3dc0-864e-4e87-9ce4-5eebbb67236c",
      productName: "Food Vendor C"
    }
  ],

  // ==============================================
  // 🏯 BM (builder monastery))
  // ==============================================
  BM: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "dd23f3d2-87ab-432a-823d-b2e8273640a1",
      eventName: "BM",
      productId: "d1dc58c3-2089-4c17-b282-bc37ddbb30b1",
      productName: "Early Bird"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "dd23f3d2-87ab-432a-823d-b2e8273640a1",
      eventName: "BM",
      productId: "e1dc58c3-2089-4c17-b282-bc37ddbb30b1",
      productName: "Resident"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "dd23f3d2-87ab-432a-823d-b2e8273640a1",
      eventName: "BM",
      productId: "f1dc58c3-2089-4c17-b282-bc37ddbb30b1",
      productName: "Week 1: Forecasting"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "dd23f3d2-87ab-432a-823d-b2e8273640a1",
      eventName: "BM",
      productId: "01dc58c3-2089-4c17-b282-bc37ddbb30b1",
      productName: "Week 2: Real world Applications"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "dd23f3d2-87ab-432a-823d-b2e8273640a1",
      eventName: "BM",
      productId: "11dc58c3-2089-4c17-b282-bc37ddbb30b1",
      productName: "Week 3: Privacy Forum"
    }
  ],

  // ==============================================
  // 🌟 MEGAZU24
  // ==============================================
  MegaZu24: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      productId: "b6d0715e-27be-5bf2-8041-125cc8e89d07",
      eventId: "70848dea-365b-5838-b36e-f691e3151cbd",
      eventName: "MegaZu24",
      productName: "Resident"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      productId: "7929010a-d31f-5355-a633-b2e8af4f36db",
      eventId: "70848dea-365b-5838-b36e-f691e3151cbd",
      eventName: "MegaZu24",
      productName: "Core-Organizer"
    }
  ],

  // ==============================================
  // 🏮 SHANHAI WOO Chiang Mai
  // ==============================================
  ShanhaiWooCM: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      productId: "ad7a4e15-ebc4-5be9-b0ea-738247848da4",
      eventId: "9ba49386-f78c-5f45-98b4-4aa68a575527",
      eventName: "ShanhaiWooCM",
      productName: "Organizer"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      productId: "685f3989-2871-52e5-a7ed-ce4ee3edd0b8",
      eventId: "9ba49386-f78c-5f45-98b4-4aa68a575527",
      eventName: "ShanhaiWooCM",
      productName: "Speaker"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      productId: "98c73de8-44c9-55c5-9807-c29159046caf",
      eventId: "9ba49386-f78c-5f45-98b4-4aa68a575527",
      eventName: "ShanhaiWooCM",
      productName: "Resident"
    }
  ],

  // ==============================================
  // 🏔️ EDGE CITY DENVER
  // ==============================================
  EdgeCityDenver: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "7eb74440-1891-4cd5-a351-b24a5b03e669",
      eventName: "Edge City Denver",
      productId: "e1dc58c3-2089-4c17-b282-bc37ddbb30b0",
      productName: "GA"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "7eb74440-1891-4cd5-a351-b24a5b03e669",
      eventName: "Edge City Denver",
      productId: "881ceef7-e38c-4611-9de2-1506d13b8f48",
      productName: "Early Bird"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "7eb74440-1891-4cd5-a351-b24a5b03e669",
      eventName: "Edge City Denver",
      productId: "2127ea78-4144-4850-8847-b1bec9e53bd1",
      productName: "Organizer"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "7eb74440-1891-4cd5-a351-b24a5b03e669",
      eventName: "Edge City Denver",
      productId: "d57f9514-e740-4334-b2db-a0389840e25c",
      productName: "Monday Day Pass"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "7eb74440-1891-4cd5-a351-b24a5b03e669",
      eventName: "Edge City Denver",
      productId: "1e53c507-077e-4cee-a386-0a42e63fe2f8",
      productName: "Tuesday Day Pass"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "7eb74440-1891-4cd5-a351-b24a5b03e669",
      eventName: "Edge City Denver",
      productId: "b8696011-93ca-4710-8bce-6136a35128d3",
      productName: "Wednesday Day Pass"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "7eb74440-1891-4cd5-a351-b24a5b03e669",
      eventName: "Edge City Denver",
      productId: "eb58f450-8025-4d97-9811-1008afd22319",
      productName: "Thursday Day Pass"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "7eb74440-1891-4cd5-a351-b24a5b03e669",
      eventName: "Edge City Denver",
      productId: "be109df0-5a65-4f58-a36c-5dcfc5170a8c",
      productName: "Saturday Day Pass"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "7eb74440-1891-4cd5-a351-b24a5b03e669",
      eventName: "Edge City Denver",
      productId: "0eede921-5bdc-45e0-bfab-5cb71db201c0",
      productName: "Sunday Day Pass"
    }
  ],

  // ==============================================
  // 🏝️ ZUTHAILAND
  // ==============================================
  ZuThailand: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "1c7cf4be-0a5e-4dda-98ce-85643579dffd",
      productName: "Resident Pass (4 weeks, private room)"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "8e7f5dcf-acde-41f9-a0d7-90da8b42aae4",
      productName: "Resident Pass (3 weeks, private room)"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "02908efd-4f06-4653-a256-2bd7eef3ce5f",
      productName: "Resident Pass (2 weeks, private room)"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "d9248daf-2a63-419f-b93e-1699ae7bdb44",
      productName: "Resident Pass (4 weeks, shared room)"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "09a121c0-8896-427e-a18a-4d42e17ebbc1",
      productName: "Resident Pass (3 weeks, shared room)"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "249c835e-621c-41e0-b209-c0697650070c",
      productName: "Resident Pass (2 weeks, shared room)"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "b308eec2-e6f3-4d75-aea5-63cfc567d9e7",
      productName: "Visitor Pass Week 1"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "f48e10ad-884a-489c-8c2e-87679e3d0d22",
      productName: "Visitor Pass Week 2"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "7b56b4c2-98cd-4538-bb63-121ceb10fe01",
      productName: "Visitor Pass Week 3"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "90392902-ae41-4e6a-bf2f-dcb92ae3bc48",
      productName: "Visitor Pass Week 4"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "90392902-ae41-4e6a-bf2f-dcb92ae3bc49",
      productName: "Resident Pass (1 week, private room)"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "6088261d-c860-42f4-b8cc-57d30d110725",
      productName: "Resident Pass (1 week, shared room)"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "351b55f2-5b0c-4336-a29b-6bc378be8750",
      productName: "Spouse Pass - 3 Weeks"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "d2164586-72c7-417b-9284-a7aab907d58a",
      productName: "Spouse Pass week 1"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "7d206e39-f40d-418e-8acf-b240c55b0602",
      productName: "Spouse Pass - 4 Weeks"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "aa277c5f-6056-4155-880a-fb9d9325a2dc",
      eventName: "ZuThailand",
      productId: "35dade2d-27b5-4fa2-9ccf-14a927b5f9e5",
      productName: "Spouse Pass - 2 Weeks"
    }
  ]
}
