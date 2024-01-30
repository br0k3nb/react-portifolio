declare type Projects = {
    readonly projects: {
        _id: string;
        images: string[];
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

declare type Project = {
    _id: string;
    images: string[];
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
};