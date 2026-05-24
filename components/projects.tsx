import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "UK House Price Predictor",
    description:
      "Machine learning dashboard trained on 30M+ HM Land Registry transactions from 1995–2026. Predicts property prices by type, location, and tenure using gradient boosting.",
    tags: ["Python", "Scikit-learn", "HuggingFace", "Streamlit"],
    github: "https://github.com/UnmatchedPerspicacious/uk-house-price-predictor",
    live: "https://united-kingdom-house-price-predictor.streamlit.app/",
  },
  {
    title: "Movie Sentiment Analyser",
    description:
      "Fine-tuned DistilBERT model trained on 50,000 IMDB reviews for real-time sentiment classification. Achieves high accuracy with sub-second inference.",
    tags: ["Python", "DistilBERT", "PyTorch", "Transformers"],
    github: "https://github.com/UnmatchedPerspicacious/Movie-Sentiment-Analyser",
    live: "https://movie-sentiment-analyser.streamlit.app/",
  },
  {
    title: "Customer Segmentation Engine",
    description:
      "RFM analysis and K-Means clustering on 500k+ real B2B transactions. Segments customers into Champions, Loyal, At-Risk, and Lost cohorts with interactive visualisations.",
    tags: ["Python", "Scikit-learn", "K-Means", "Pandas"],
    github: "https://github.com/UnmatchedPerspicacious/customer-segmentation-rfm",
  },
  {
    title: "Cluster Explorer",
    description:
      "Universal clustering tool — upload any CSV, pick features, and explore your data through PCA, t-SNE, and K-Means or DBSCAN in seconds.",
    tags: ["Python", "PCA", "t-SNE", "DBSCAN"],
    github: "https://github.com/UnmatchedPerspicacious/Cluster-Explorer",
    live: "https://cluster-explorer.streamlit.app/",
  },
  {
    title: "News Topic Explorer",
    description:
      "BERTopic model trained on 18,000 Usenet articles using Sentence-BERT embeddings, UMAP dimensionality reduction, and HDBSCAN clustering to discover latent topics.",
    tags: ["Python", "BERTopic", "UMAP", "HDBSCAN"],
    github: "https://github.com/UnmatchedPerspicacious/News-Topic-Explorer",
    live: "https://news-topic-explorer.streamlit.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Projects
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Things I&apos;ve Built
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          A selection of projects that showcase my skills and passion for
          building innovative solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </Link>

                  {/* The fix: This checks if project.live exists before rendering the link */}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://github.com/UnmatchedPerspicacious"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View more on GitHub
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}