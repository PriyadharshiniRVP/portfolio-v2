function Articles() {
  const articles = [
    {
      id: 1,
      title: "Building an AI SOC Copilot That Never Forgets",
      platform: "Medium",
      date: "July 2026",
      readTime: "4 min read",
      link: "https://medium.com/@priyarama2209/building-an-ai-soc-copilot-that-never-forgets-giving-cybersecurity-investigations-a-memory-with-3664e9dc1ecf",
      github: "https://github.com/PriyadharshiniRVP/soc-memory-copilot",
      tech: ["React", "MongoDB", "Cognee", "Python", "Threat Intelligence APIs"],
      description: "AI-powered cybersecurity assistant with persistent memory built during the WeMakeDevs AI Hackathon. The system remembers past investigations, connects related incidents, and becomes smarter over time using Cognee's hybrid graph-vector memory layer.",
      badge: "Hackathon Project",
      highlights: [
        "Built persistent memory layer for cybersecurity investigations",
        "Integrated graph-vector memory using Cognee",
        "Developed React dashboard with real-time alert monitoring"
      ]
    },
    {
      id: 2,
      title: "Building CodeBuddy: An Emotion-Aware Developer Assistant Powered by Amazon Nova",
      platform: "AWS Builder Center",
      date: "March 2026",
      readTime: "5 min read",
      link: "https://builder.aws.com/content/3B23Aklkd23puViTqH2jDqNeDTn/building-codebuddy-an-emotion-aware-developer-assistant-powered-by-amazon-nova",
      github: "https://github.com/PriyadharshiniRVP/frustation-detect-nova",
      tech: ["Amazon Nova Lite", "AWS Bedrock", "LightGBM", "DeepFace", "OpenCV", "Python"],
      description: "Emotion-aware AI assistant that detects developer frustration using keystroke dynamics and facial expression analysis. When frustration is detected, CodeBuddy provides real-time debugging guidance through Amazon Nova Lite on AWS Bedrock.",
      badge: "AWS Builder Center Featured",
      highlights: [
        "Implemented multimodal frustration detection using LightGBM",
        "Integrated Amazon Nova Lite for real-time AI assistance",
        "Combined behavioral and visual signals for reliable emotion detection"
      ]
    }
  ];

  return (
    <section className="articles-section" id="articles">
      <div className="articles-header">
        <h2>Articles</h2>
        <p className="articles-subtitle">Technical writing and project documentation</p>
      </div>

      <div className="articles-grid">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-badge">{article.badge}</div>
            
            <h3 className="article-title">{article.title}</h3>
            
            <div className="article-meta">
              <span className="meta-platform">{article.platform}</span>
              <span className="meta-separator">·</span>
              <span className="meta-date">{article.date}</span>
              <span className="meta-separator">·</span>
              <span className="meta-readtime">{article.readTime}</span>
            </div>

            <p className="article-description">{article.description}</p>

            <div className="tech-stack">
              {article.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="article-highlights">
              <strong>Key Highlights</strong>
              <ul>
                {article.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="article-links">
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="article-link primary"
              >
                Read Full Article
              </a>
              {article.github && (
                <a 
                  href={article.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="article-link secondary"
                >
                  View Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Articles