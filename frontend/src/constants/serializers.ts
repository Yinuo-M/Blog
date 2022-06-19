export interface FragmentSerializer {
    id?: number;
    chinese_author: string;
    english_author: string;
    english_origin?: string;
    chinese_origin?: string;
    english_content?: string;
    chinese_content?: string;
    originally_written_on?: string | null;
    status?: "DR" | "PU" | "AR";
    category?: "EX" | "WR";
    language?: "EN" | "CH" | "BO";
    image?: any;
    image_alt?: string;
}

