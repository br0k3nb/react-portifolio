declare type Projects = {
    readonly projects: {
        _id: string;
        image: string;
        generalInfo: {
            name: string;
            description: string;
            githubLink: string;
            projectLink: string;
        };
        stackInfo: {
            stack: string[];
            icons: string[];
        };
        updatedAt?: string;
        createdAt: string;
    }[]
};