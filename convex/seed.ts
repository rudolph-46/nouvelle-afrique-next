import { mutation } from "./_generated/server";

// ============================================
// SEED CATEGORIES
// ============================================

export const seedCategories = mutation({
  handler: async (ctx) => {
    const categories = [
      { name: "À la une", slug: "a-la-une", description: "Les articles phares du moment", color: "#DC2626", sortOrder: 0 },
      { name: "Politique", slug: "politique", description: "Actualités politiques africaines et relations internationales", color: "#2563EB", sortOrder: 1 },
      { name: "Économie", slug: "economie", description: "Marchés, finance, commerce et développement économique", color: "#059669", sortOrder: 2 },
      { name: "Technologie", slug: "technologie", description: "Innovation, startups et transformation digitale en Afrique", color: "#7C3AED", sortOrder: 3 },
      { name: "Culture", slug: "culture", description: "Arts, cinéma, musique, littérature et société", color: "#DB2777", sortOrder: 4 },
      { name: "Sport", slug: "sport", description: "Actualités sportives du continent", color: "#EA580C", sortOrder: 5 },
      { name: "Opinions", slug: "opinions", description: "Tribunes, analyses et points de vue", color: "#4B5563", sortOrder: 6 },
    ];

    let created = 0;
    for (const cat of categories) {
      const existing = await ctx.db
        .query("categories")
        .withIndex("by_slug", (q) => q.eq("slug", cat.slug))
        .first();

      if (!existing) {
        await ctx.db.insert("categories", {
          ...cat,
          isActive: true,
          createdAt: Date.now(),
        });
        created++;
      }
    }

    return { success: true, created };
  },
});

// ============================================
// SEED AUTHORS
// ============================================

export const seedAuthors = mutation({
  handler: async (ctx) => {
    const authors = [
      {
        name: "Amadou Diop",
        slug: "amadou-diop",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        bio: "Journaliste économique, spécialiste des marchés financiers africains et des politiques monétaires de la zone CEMAC.",
        categories: ["economie"],
        expertise: ["CEMAC", "finance", "dette", "FMI", "commerce"],
        writingStyle: "Ton analytique et rigoureux. S'appuie systématiquement sur des données chiffrées et des comparaisons internationales. Structure ses articles autour d'une thèse claire qu'il démontre point par point. Utilise des transitions logiques ('Or', 'Toutefois', 'Force est de constater'). Évite le sensationnalisme. Conclut toujours par une mise en perspective ou une projection.",
        tone: "analytique",
        signaturePhrase: "Les chiffres parlent d'eux-mêmes.",
        sampleIntro: "Le dernier rapport du FMI sur les perspectives économiques en Afrique subsaharienne ne manquera pas de faire réagir. Avec une croissance projetée à 4,1% pour 2025, le continent affiche une résilience remarquable dans un contexte mondial incertain.",
        sampleConclusion: "À l'heure où les économies africaines cherchent à diversifier leurs sources de financement, cette initiative pourrait bien marquer un tournant. Reste à savoir si la volonté politique suivra les engagements pris.",
      },
      {
        name: "Fatou Ndiaye",
        slug: "fatou-ndiaye",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face",
        bio: "Analyste politique, couvre les dynamiques de pouvoir sur le continent et les relations internationales de l'Afrique.",
        categories: ["politique"],
        expertise: ["Union Africaine", "CEDEAO", "diplomatie", "élections", "gouvernance"],
        writingStyle: "Ton direct et incisif. Va droit au but dès la première phrase. Pose des questions rhétoriques provocatrices. Utilise des formules courtes et percutantes entre des paragraphes d'analyse plus denses. N'hésite pas à nommer les acteurs et à pointer les contradictions. Style presque éditorialiste mais toujours factuel.",
        tone: "engagé",
        signaturePhrase: "C'est là que le bât blesse.",
        sampleIntro: "Nouveau sommet, nouvelles promesses. Les dirigeants africains réunis à Addis-Abeba ont encore une fois affiché leur unité devant les caméras. Mais derrière les communiqués consensuels, les fractures sont bien réelles.",
        sampleConclusion: "La question n'est plus de savoir si l'Afrique peut parler d'une seule voix. C'est de savoir qui, concrètement, fera taire les dissonances.",
      },
      {
        name: "Ibrahim Traoré",
        slug: "ibrahim-traore",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
        bio: "Journaliste tech, suit l'écosystème numérique africain, les startups et l'innovation technologique sur le continent.",
        categories: ["technologie"],
        expertise: ["fintech", "startups", "IA", "mobile money", "télécoms", "e-commerce"],
        writingStyle: "Ton enthousiaste mais lucide. Raconte les innovations comme des histoires humaines — qui a créé quoi, pourquoi, et quel problème ça résout. Utilise des analogies concrètes pour expliquer la tech. Compare souvent avec les modèles asiatiques ou américains. Ponctue d'anecdotes terrain. Phrases dynamiques, rythme rapide.",
        tone: "narratif",
        signaturePhrase: "L'Afrique n'attend plus qu'on lui montre le chemin.",
        sampleIntro: "Quand Amina Tounkara a lancé sa plateforme de paiement depuis un cybercafé de Bamako en 2022, personne n'y croyait. Trois ans plus tard, sa startup traite plus de 2 millions de transactions par mois.",
        sampleConclusion: "Une chose est sûre : pendant que le reste du monde débat des régulations, les entrepreneurs africains, eux, construisent.",
      },
      {
        name: "Mariam Bah",
        slug: "mariam-bah",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
        bio: "Correspondante culture et société, explore les transformations sociales, culturelles et artistiques du continent.",
        categories: ["culture", "sport"],
        expertise: ["cinéma", "musique", "littérature", "diaspora", "sport", "société"],
        writingStyle: "Ton chaleureux et immersif. Écrit comme si elle racontait une histoire à un ami. Beaucoup de descriptions sensorielles et de contexte humain. Donne la parole aux acteurs (citations, témoignages). Mélange le personnel et l'universel. Phrases fluides, presque littéraires par moments.",
        tone: "narratif",
        signaturePhrase: "Et c'est tout un continent qui vibre.",
        sampleIntro: "Dans les rues de Dakar, les affiches du festival sont partout. Sur les murs défraîchis du Plateau comme sur les palissades de Ouakam, le visage de Toumani Diabaté sourit aux passants pressés.",
        sampleConclusion: "Au-delà des projecteurs et des tapis rouges, c'est une génération entière d'artistes qui redéfinit ce que signifie être africain aujourd'hui.",
      },
      {
        name: "Ousmane Keita",
        slug: "ousmane-keita",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        bio: "Spécialiste des questions sécuritaires et géopolitiques, suit les conflits, le terrorisme et les enjeux de défense sur le continent.",
        categories: ["politique", "opinions"],
        expertise: ["sécurité", "terrorisme", "Sahel", "conflits", "maintien de la paix", "géopolitique"],
        writingStyle: "Ton grave et mesuré. Contextualise toujours les événements dans leur historique. Utilise un vocabulaire précis et technique (sans jargon inaccessible). Évite les jugements hâtifs, présente les différentes perspectives. Structure chronologique ou par acteurs. Sobre, factuel, professionnel.",
        tone: "investigation",
        signaturePhrase: "La situation reste volatile.",
        sampleIntro: "L'attaque de mardi contre la base militaire de Niamey n'est pas un incident isolé. Elle s'inscrit dans une escalade méthodique qui, depuis six mois, redessine la carte sécuritaire du Sahel occidental.",
        sampleConclusion: "Sans une coordination renforcée entre les forces régionales et un engagement clair des partenaires internationaux, le cycle de violence risque de s'auto-entretenir pour les années à venir.",
      },
    ];

    let created = 0;
    for (const author of authors) {
      const existing = await ctx.db
        .query("authors")
        .withIndex("by_slug", (q) => q.eq("slug", author.slug))
        .first();

      if (!existing) {
        await ctx.db.insert("authors", {
          ...author,
          isActive: true,
          articleCount: 0,
          createdAt: Date.now(),
        });
        created++;
      }
    }

    return { success: true, created };
  },
});

// ============================================
// SEED ALL
// ============================================

export const seedAll = mutation({
  handler: async (ctx) => {
    // This is a convenience function - in practice, call seedCategories and seedAuthors separately
    return { message: "Use seedCategories and seedAuthors separately" };
  },
});
