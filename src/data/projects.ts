export const projects = [
    {
        title: 'MU Rankings',
        description:
            'Ranking y catálogo de servidores de MU Online, en producción con unos 550 servidores.',
        tech: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Nuxt', 'Vue', 'k3s', 'Cloudflare'],
        demo: 'https://mu-rankings.com',
    },
    {
        title: 'agintis',
        description:
            'Plantilla para construir asistentes de IA que responden con la información de tus documentos: citan la fuente de cada respuesta, no inventan cuando no hay información y se puede medir qué tan bien responden. Para un tema nuevo basta con cambiar la configuración.',
        tech: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker'],
        github: 'https://github.com/Wysted/agintis',
    },
    {
        title: 'atrium',
        description:
            'Portal de entrada a las aplicaciones internas de una empresa: cada persona entra con su cuenta de Google, ve solo las apps a las que tiene acceso y los administradores deciden quién entra a cuál. Primera versión publicada (v0.1).',
        tech: ['Go', 'PostgreSQL', 'Traefik', 'k3s'],
        github: 'https://github.com/Wysted/atrium',
    },
    {
        title: 'Domos Lago Rapel',
        description:
            'Landing de un glamping con un panel de administración para controlar el contenido de la página.',
        tech: ['Go', 'PostgreSQL', 'Astro', 'Vue', 'k3s', 'Cloudflare'],
        demo: 'https://domoslagorapel.cl',
    },
];
