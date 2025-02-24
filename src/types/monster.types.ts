export interface Monster {
    id: number;
    name: string;
    imageUrl: string;
    tags: string[];
    description?: string;
    cats: {
        id: number;
        imageUrl: string;
    }[];
}

export const MONSTER_DATA: Monster[] = [
    {
        id: 1,
        name: "FinBot",
        imageUrl: "https://robohash.org/1?size=150x150",
        tags: ["Fintech", "AI"],
        description: "Specialized in financial technology solutions",
        cats: [
            { id: 1, imageUrl: "https://robohash.org/cat1?set=set4&size=50x50" },
            { id: 2, imageUrl: "https://robohash.org/cat2?set=set4&size=50x50" },
            { id: 3, imageUrl: "https://robohash.org/cat3?set=set4&size=50x50" }
        ]
    },
    {
        id: 2,
        name: "UEHBot",
        imageUrl: "https://robohash.org/2?size=150x150",
        tags: ["UEH Chatbot", "Education"],
        description: "University assistant chatbot",
        cats: [
            { id: 4, imageUrl: "https://robohash.org/cat4?set=set4&size=50x50" },
            { id: 5, imageUrl: "https://robohash.org/cat5?set=set4&size=50x50" },
            { id: 6, imageUrl: "https://robohash.org/cat6?set=set4&size=50x50" }
        ]
    },
    {
        id: 3,
        name: "CitekaBot",
        imageUrl: "https://robohash.org/3?size=150x150",
        tags: ["CITEKA", "Research"],
        description: "Research and citation assistant",
        cats: [
            { id: 7, imageUrl: "https://robohash.org/cat7?set=set4&size=50x50" },
            { id: 8, imageUrl: "https://robohash.org/cat8?set=set4&size=50x50" },
            { id: 9, imageUrl: "https://robohash.org/cat9?set=set4&size=50x50" }
        ]
    },
    {
        id: 4,
        name: "SMEHelper",
        imageUrl: "https://robohash.org/4?size=150x150",
        tags: ["SME Chatbot", "Business"],
        description: "Small business assistant",
        cats: [
            { id: 10, imageUrl: "https://robohash.org/cat10?set=set4&size=50x50" },
            { id: 11, imageUrl: "https://robohash.org/cat11?set=set4&size=50x50" },
            { id: 12, imageUrl: "https://robohash.org/cat12?set=set4&size=50x50" }
        ]
    },
    {
        id: 5,
        name: "EVNAssist",
        imageUrl: "https://robohash.org/5?size=150x150",
        tags: ["EVN Chatbot", "Utilities"],
        description: "Energy management assistant",
        cats: [
            { id: 13, imageUrl: "https://robohash.org/cat13?set=set4&size=50x50" },
            { id: 14, imageUrl: "https://robohash.org/cat14?set=set4&size=50x50" },
            { id: 15, imageUrl: "https://robohash.org/cat15?set=set4&size=50x50" }
        ]
    }
]; 