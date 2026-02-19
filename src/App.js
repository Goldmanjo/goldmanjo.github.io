import React, { useState, useEffect } from 'react';
import { Play, Mail, Github, Linkedin, ExternalLink, ArrowLeft, ChevronRight, X } from 'lucide-react';

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        const bg = document.querySelector('.animated-bg');
        if (!bg) return;
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            bg.style.setProperty('--mouse-x', `${x}%`);
            bg.style.setProperty('--mouse-y', `${y}%`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const openVideo = (videoUrl) => {
        setCurrentVideo(videoUrl);
        setVideoModalOpen(true);
    };

    const closeVideo = () => {
        setVideoModalOpen(false);
        setCurrentVideo(null);
    };

    const projects = {
        vcmc: {
            id: 'vcmr',
            title: 'Volume Center Motion Capture Research',
            category: 'Research',
            description: 'Rigless and blendshape-free facial motion capture research',
            technologies: ['Python', 'Blender API', 'NumPy', 'Orbbec Depth Cameras'],
            image: `${process.env.PUBLIC_URL}/VCMR_Teaser.jpg`,
            images: null,
            link: null,
            pdfUrl: '/Volume_Center_Re_targeting_for_Rig_less_Character_Movement_and_Motion_Capture.pdf',
            videoUrl: 'https://www.youtube.com/embed/UQ3wMDxV3eU',
            fullDescription: `
        <h3>Overview</h3>
        <p>This project uses depth camera data for a novel approach to rigless and blendshape-free facial motion capture. The paper for this project is currently under review for SIGGRAPH 2026.</p>
        
        <h3>Paper Abstract</h3>
        <p>Facial motion capture is an essential tool for 3D artists and entertainment studios to create believable animated digital characters. However, existing workflows are expensive and require extensive manual setup; artists must create complex facial rigs using systems of blendshapes and bone-based armatures to deform and manipulate the model. We present Volume Center Motion Re-targeting (VCMR), a novel volumetric approach to facial motion capture and animation. Unlike existing methods that track surface landmarks to solve for and approximate blendshape values, our technique uses volume center tracking to capture an actor's facial deformations and movements. We then establish anatomical correspondences between our actor's captured performance and our target character model and automatically retarget the volume movement onto the volume centers of our target model. Finally, we use the retargetted volume's movement to animate and move the target model's vertices. Our method provides high-density tracking information and eliminates the need for rigging and blendshapes. Experiments are conducted on a variety of target characters, with varying topologies, and multiple motion sequences.</p>
      `,
            role: 'Lead Researcher & Developer',
            timeline: 'July 2025 - January 2026',
            collaborators: 'Prof. Mallesh Dasari, SINRG Lab'
        },
        nasa: {
            id: 'nasa',
            title: 'NASA SUITS Challenge',
            category: 'XR Development',
            description: 'NASA Student challenge for developing astronaut user interface designs',
            technologies: ['Unity', 'Blender', 'C#', 'Unreal Engine'],
            image: `${process.env.PUBLIC_URL}/SUITSmain.png`,
            images: [
                `${process.env.PUBLIC_URL}/SUITS1.png`,
                `${process.env.PUBLIC_URL}/SUITS2.png`,
                `${process.env.PUBLIC_URL}/SUITS3.png`
            ],
            logos: [
                '/nasa-logo.png',
                '/team-logo.png'
            ],
            proposalPdfUrl: '/nasa-suits-proposal.pdf',
            missionLink: 'https://www.nasa.gov/wp-content/uploads/2025/09/fy26-suits-mission-description.pdf',
            link: null,
            fullDescription: `
        <h3>Overview</h3>
        <p>NASA Spacesuit User Interface Technologies for Students (S.U.I.T.S.) is an annual virtual reality challenge run by NASA to develop ideas for using emerging technology to assist lunar astronauts in the upcoming Artemis missions. Our project this year involves controlling and driving a pressurized rover using novel U.I. interactions. We will be utilizing virtual reality and LLM assistants to create our interface.</p>
        
        <p>Northeastern University's team SIRIUS is one of ten teams selected by NASA to participate in the challenge for the last two years. Last year I was artistic lead for the team responsible for leading asset creation for 3D user interface, helping with design, and assisting with scripting and implementation in Unity.</p>
        
        <p>This year I am team lead and am responsible for project management, overseeing development, leading proposal writing, and coordinating the entire project. Unlike last year, our project is being developed in full VR using Unreal Engine.</p>
        
        <h3>Team Leadership</h3>
        <ul>
          <li>Managing interdisciplinary team of 8 students</li>
          <li>Coordinating technical proposal development</li>
          <li>Interfacing with NASA mentors and advisors</li>
          <li>Presenting at design reviews and technical demonstrations</li>
        </ul>
      `,
            role: 'Team Lead',
            timeline: '2024 - Present',
            collaborators: 'Northeastern NASA SUITS Team'
        },
        unity: {
            id: 'unity',
            title: 'Unity TVMC Decoder Plugin',
            category: 'XR Development',
            description: 'Real-time compressed mesh playback for Meta Quest 3.',
            technologies: ['Unity', 'C++', 'C#', 'Meta Quest SDK'],
            image: `${process.env.PUBLIC_URL}/TVMC.png`,
            images: null,
            link: null,
            videoUrl: 'https://www.youtube.com/embed/2osLISCCCtA',
            fullDescription: `
        <h3>Overview</h3>
        <p>Developed as an extension to an ongoing research project at Northeastern University's SINRG labs, this Unity plugin is a real time playback engine for models encoded using a lab created compression algorithm for 3D scanned video mesh sequences.</p>
        
        <p>The plugin has two main components; a C++ dynamic library decoder backend, and a C# Unity front end.</p>
        
        <p>The C++ backend handles file I/O and sequence decoding. The Unity side is responsible for fetching and displaying the meshes in engine. The plugin is able to run locally on Quest 3 headsets and achieve playback of 8fps while decoding in real-time.</p>
      `,
            role: 'Technical Lead',
            timeline: 'July 2025 - December 2025',
            collaborators: 'SINRG Lab Research Team'
        },
        laststrands: {
            id: 'laststrands',
            title: 'The Last Strands',
            category: 'Creative Development',
            description: 'Original childrens fantasy show pitch bible',
            technologies: ['World Building', 'Character Development', 'Visual Development', 'Narrative Design', 'Blender', 'ZBrush'],
            image: `${process.env.PUBLIC_URL}/pitch-bible/Page1.jpg`,
            pitchBibleImages: [
                `${process.env.PUBLIC_URL}/pitch-bible/Page1.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page2.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page3.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page4.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page5.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page6.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page7.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page8.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page9.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page10.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page11.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page12.jpg`,
                `${process.env.PUBLIC_URL}/pitch-bible/Page13.jpg`,
            ],
            link: null,
            fullDescription: `
        <h3>Series Overview</h3>
        <p>The Last Strands is an original children's fantasy show that I developed a pitch bible for. The show is whimsical, strange, and surrealistic, designed to invoke childhood magic and wonder.</p>
        
        <p>All 3D art is original and created in Blender and ZBrush.</p>
      `,
            role: 'Creator & Writer',
            timeline: '2024 - 2025',
            collaborators: 'Solo Project'
        }
    };

    const renderHome = () => (
        <>
            {/* Hero Section */}
            <div className="section hero medium">
                <div className="container">
                    <div className="headshot-container">
                        <img
                            src={`${process.env.PUBLIC_URL}/headshot.jpg`}
                            alt="Joshua Goldman"
                            className="headshot"
                        />
                    </div>
                    <h1>Joshua Goldman</h1>
                    <p>Technical Artist & XR Developer</p>

                    <div className="reel-container">
                        <div className="reel-card" onClick={() => openVideo('https://www.youtube.com/embed/N3JYDp873P8')}>
                            <div className="reel-placeholder">
                                <Play size={48} style={{ color: '#a78bfa' }} />
                            </div>
                            <div className="reel-content">
                                <h3>3D Art Reel</h3>
                                <p>Character modeling, rigging, and animation</p>
                            </div>
                        </div>
                        <div className="reel-card" onClick={() => openVideo('https://www.youtube.com/embed/NnJIQoGCqEA')}>
                            <div className="reel-placeholder">
                                <Play size={48} style={{ color: '#a78bfa' }} />
                            </div>
                            <div className="reel-content">
                                <h3>Technical Reel</h3>
                                <p>XR development and research projects</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-links">
                        <a href="mailto:goldmansjosh@gmail.com" className="contact-link">
                            <Mail size={18} /> goldmansjosh@gmail.com
                        </a>
                        <a href="https://github.com/goldmanjo" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <Github size={18} /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/goldmanjs" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="section medium">
                <div className="container">
                    <h2>Featured Work</h2>
                    <div className="project-grid">
                        {Object.values(projects).map((project) => (
                            <div
                                key={project.id}
                                className="project-card"
                                onClick={() => setCurrentPage(project.id)}
                            >
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-content">
                                    <div className="project-header">
                                        <div>
                                            <div className="project-category">{project.category}</div>
                                            <h3 className="project-title">{project.title}</h3>
                                        </div>
                                        <ChevronRight size={20} style={{ color: '#a78bfa' }} />
                                    </div>
                                    <p className="project-description">{project.description}</p>
                                    <div className="tech-tags">
                                        {project.technologies.slice(0, 4).map((tech, j) => (
                                            <span key={j} className="tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="section compact">
                <div className="container">
                    <h2>About</h2>
                    <div className="about-content">
                        <div className="about-card">
                            <p>
                                I am a Third-year Computer Science and Media Arts student at Northeastern University.
                            </p>
                            <p>
                                My work spans 3D animation and modeling, motion capture research, XR development, technical art, film-production, and creative writing. As an artist and programmer I am always excited
                                by the prospect of bridging arts and technology. My current projects that I am working on include an immersive narrative game in Unreal Engine and leading the Northeastern University NASA SUITS team.
                            </p>
                            <p>
                                I have experience with Blender, ZBrush, Unity, Unreal Engine, Python, C++, Java and C#.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    const renderProject = (projectId) => {
        const project = projects[projectId];
        if (!project) return renderHome();

        return (
            <div className="section project-detail">
                <div className="container">
                    <button className="back-button" onClick={() => setCurrentPage('home')}>
                        <ArrowLeft size={20} /> Back to Projects
                    </button>

                    <div className="project-detail-header">
                        <div className="project-category">{project.category}</div>
                        <h1>{project.title}</h1>
                        <p className="project-tagline">{project.description}</p>
                    </div>

                    <div className="project-meta">
                        <div className="meta-item">
                            <div className="meta-label">Role</div>
                            <div className="meta-value">{project.role}</div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-label">Timeline</div>
                            <div className="meta-value">{project.timeline}</div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-label">Team</div>
                            <div className="meta-value">{project.collaborators}</div>
                        </div>
                    </div>

                    {project.logos && (
                        <div className="logos-section">
                            {project.logos.map((logo, i) => (
                                <img key={i} src={`${process.env.PUBLIC_URL}${logo}`} alt={`Logo ${i + 1}`} className="project-logo" />
                            ))}
                        </div>
                    )}

                    {(project.proposalPdfUrl || project.missionLink) && (
                        <div className="resource-buttons">
                            {project.proposalPdfUrl && (
                                <a href={`${process.env.PUBLIC_URL}${project.proposalPdfUrl}`} target="_blank" rel="noopener noreferrer" className="resource-button">
                                    <ExternalLink size={18} /> View Proposal (PDF)
                                </a>
                            )}
                            {project.missionLink && (
                                <a href={project.missionLink} target="_blank" rel="noopener noreferrer" className="resource-button">
                                    <ExternalLink size={18} /> NASA SUITS Mission
                                </a>
                            )}
                        </div>
                    )}

                    {project.fullDescription && (
                        <div className="project-body" dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
                    )}

                    {project.images && !project.pitchBibleImages && (
                        <div className="project-images">
                            {project.images.map((img, i) => (
                                <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="project-detail-image" />
                            ))}
                        </div>
                    )}

                    {project.videoUrl && (
                        <div className="video-section">
                            <h3>Demo Video</h3>
                            <div className="video-embed-container">
                                <iframe
                                    src={project.videoUrl}
                                    className="video-embed"
                                    title={`${project.title} Video`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    )}

                    {project.pdfUrl && (
                        <div className="pdf-section">
                            <h3>Full Paper</h3>
                            <p style={{ textAlign: 'center', color: '#9ca3af', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
                                Read the complete methodology, results, and validation details
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <a href={`${process.env.PUBLIC_URL}${project.pdfUrl}`} target="_blank" rel="noopener noreferrer" className="pdf-download-button">
                                    <ExternalLink size={18} /> View Full Paper (PDF)
                                </a>
                            </div>
                        </div>
                    )}

                    {project.pitchBibleImages && (
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ color: '#a78bfa', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Pitch Bible</h3>
                            <div className="pitch-bible-gallery">
                                {project.pitchBibleImages.map((img, i) => (
                                    <img key={i} src={img} alt={`Pitch Bible Page ${i + 1}`} className="pitch-bible-page" />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="project-tech">
                        <h3>Technologies</h3>
                        <div className="tech-tags-large">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tag-large">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {project.link && (
                        <div className="project-links">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">
                                <ExternalLink size={18} /> View Project
                            </a>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #000; color: #fff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; overflow-x: hidden; }
        .animated-bg { position: fixed; inset: 0; z-index: -10; background: linear-gradient(135deg, #3b0764 0%, #000 50%, #1e1b4b 100%); background-size: 200% 200%; animation: gradientShift 20s ease infinite; }
        .animated-bg::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(88, 28, 135, 0.4), transparent 70%); transition: background 0.1s ease; }
        .grid-overlay { position: fixed; inset: 0; z-index: -9; background-image: linear-gradient(rgba(168, 85, 247, 0.3) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1.5px, transparent 1.5px); background-size: 55px 55px; transform: perspective(450px) rotateX(60deg) scale(2); transform-origin: center bottom; opacity: 0.5; animation: gridMove 35s linear infinite; }
        @keyframes gradientShift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes gridMove { 0% { transform: perspective(450px) rotateX(60deg) scale(2) translateY(0); } 100% { transform: perspective(450px) rotateX(60deg) scale(2) translateY(55px); } }
        
        .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
        .section { padding: 5rem 0; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; }
        .section.compact { padding: 3rem 0; min-height: auto; }
        .section.medium { padding: 9rem 0; min-height: auto; }
        .hero { text-align: center; }
        .headshot-container { margin-bottom: 2rem; display: flex; justify-content: center; }
        .headshot { width: 180px; height: 180px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(139,92,246,0.6); box-shadow: 0 10px 40px rgba(168,85,247,0.3); transition: all 0.3s; }
        .headshot:hover { transform: scale(1.05); border-color: rgba(168,85,247,0.8); box-shadow: 0 15px 50px rgba(168,85,247,0.4); }
        .hero h1 { font-size: 4rem; font-weight: bold; color: #a78bfa; margin-bottom: 1rem; }
        .hero p { font-size: 1.5rem; color: #9ca3af; margin-bottom: 2rem; }
        
        .reel-container { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem; }
        .reel-card { background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(139,92,246,0.3); overflow: hidden; transition: all 0.3s; cursor: pointer; }
        .reel-card:hover { transform: translateY(-8px); border-color: rgba(168,85,247,0.6); box-shadow: 0 20px 40px rgba(168,85,247,0.3); }
        .reel-placeholder { aspect-ratio: 16/9; background: #000; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid rgba(139,92,246,0.3); }
        .reel-content { padding: 1.5rem; }
        .reel-content h3 { color: #a78bfa; margin-bottom: 0.5rem; }
        .reel-content p { color: #9ca3af; font-size: 0.875rem; }
        
        .contact-links { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; }
        .contact-link { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: rgba(0,0,0,0.6); border: 1px solid rgba(139,92,246,0.5); border-radius: 9999px; color: #a78bfa; font-weight: 600; text-decoration: none; transition: all 0.3s; }
        .contact-link:hover { transform: translateY(-2px); border-color: rgba(168,85,247,0.8); box-shadow: 0 10px 25px rgba(168,85,247,0.3); }
        
        h2 { font-size: 2.5rem; font-weight: bold; color: #a78bfa; margin-bottom: 3rem; text-align: center; }
        
        .project-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        .project-card { background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(139,92,246,0.3); overflow: hidden; transition: all 0.3s; cursor: pointer; }
        .project-card:hover { transform: translateY(-4px); border-color: rgba(168,85,247,0.6); box-shadow: 0 15px 35px rgba(168,85,247,0.25); }
        .project-image { width: 100%; height: 250px; object-fit: cover; border-bottom: 1px solid rgba(139,92,246,0.3); }
        .project-content { padding: 1.5rem; }
        .project-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem; }
        .project-title { font-size: 1.25rem; font-weight: bold; color: #fff; }
        .project-category { font-size: 0.75rem; color: #a78bfa; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
        .project-description { color: #d1d5db; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem; }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tag { padding: 0.375rem 0.75rem; background: rgba(0,0,0,0.6); border: 1px solid rgba(139,92,246,0.4); border-radius: 0.5rem; color: #c4b5fd; font-size: 0.75rem; }
        
        .about-content { max-width: 800px; margin: 0 auto; }
        .about-card { background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(139,92,246,0.3); padding: 2rem; margin-bottom: 2rem; }
        .about-card p { color: #d1d5db; line-height: 1.8; margin-bottom: 1rem; }
        .about-card p:last-child { margin-bottom: 0; }
        
        /* Project Detail Styles */
        .project-detail { min-height: 100vh; padding-top: 3rem; padding-bottom: 3rem; justify-content: flex-start; }
        .back-button { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(0,0,0,0.6); border: 1px solid rgba(139,92,246,0.5); border-radius: 9999px; color: #a78bfa; padding: 0.75rem 1.5rem; font-weight: 600; cursor: pointer; transition: all 0.3s; margin-bottom: 2rem; }
        .back-button:hover { transform: translateY(-2px); border-color: rgba(168,85,247,0.8); box-shadow: 0 10px 25px rgba(168,85,247,0.3); }
        
        .project-detail-header { text-align: center; margin-bottom: 3rem; }
        .project-detail-header h1 { font-size: 3rem; color: #a78bfa; margin-bottom: 1rem; }
        .project-tagline { font-size: 1.25rem; color: #9ca3af; max-width: 800px; margin: 0 auto; }
        
        .project-meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 3rem; }
        .meta-item { background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(139,92,246,0.3); padding: 1.5rem; text-align: center; }
        .meta-label { color: #a78bfa; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
        .meta-value { color: #fff; font-size: 1rem; font-weight: 600; }
        
        .project-images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 3rem; }
        .project-detail-image { width: 100%; height: 300px; object-fit: contain; background: rgba(0,0,0,0.3); border-radius: 1rem; border: 1px solid rgba(139,92,246,0.3); }
        
        .pitch-bible-gallery { display: flex; flex-direction: column; gap: 2rem; max-width: 900px; margin: 0 auto; }
        .pitch-bible-page { width: 100%; height: auto; border-radius: 0.5rem; border: 1px solid rgba(139,92,246,0.3); box-shadow: 0 4px 15px rgba(0,0,0,0.3); transition: all 0.3s; }
        .pitch-bible-page:hover { transform: scale(1.02); border-color: rgba(168,85,247,0.6); box-shadow: 0 8px 25px rgba(168,85,247,0.2); }
        
        .logos-section { display: flex; justify-content: center; align-items: center; gap: 4rem; margin-bottom: 3rem; padding: 3rem 0; }
        .project-logo { height: 240px; width: auto; object-fit: contain; filter: brightness(1.1); transition: all 0.3s; }
        .project-logo:hover { transform: scale(1.1); filter: brightness(1.3); }
        
        .resource-buttons { display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 3rem; flex-wrap: wrap; }
        .resource-button { display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: rgba(0,0,0,0.6); border: 1px solid rgba(139,92,246,0.5); border-radius: 9999px; color: #a78bfa; font-weight: 600; text-decoration: none; transition: all 0.3s; }
        .resource-button:hover { transform: translateY(-2px); border-color: rgba(168,85,247,0.8); box-shadow: 0 10px 25px rgba(168,85,247,0.3); }
        
        .project-body { background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(139,92,246,0.3); padding: 2.5rem; margin-bottom: 3rem; }
        .project-body h3 { color: #a78bfa; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; }
        .project-body h3:first-child { margin-top: 0; }
        .project-body p { color: #d1d5db; line-height: 1.8; margin-bottom: 1.5rem; }
        .project-body ul { color: #d1d5db; line-height: 1.8; margin-left: 1.5rem; margin-bottom: 1.5rem; }
        .project-body li { margin-bottom: 0.5rem; }
        
        .project-tech { background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(139,92,246,0.3); padding: 2rem; margin-bottom: 3rem; }
        .project-tech h3 { color: #a78bfa; font-size: 1.5rem; margin-bottom: 1.5rem; text-align: center; }
        .tech-tags-large { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }
        .tag-large { padding: 0.75rem 1.5rem; background: rgba(0,0,0,0.6); border: 1px solid rgba(139,92,246,0.4); border-radius: 0.5rem; color: #c4b5fd; font-size: 0.875rem; font-weight: 600; }
        
        .project-links { display: flex; justify-content: center; gap: 1.5rem; }
        .project-link-button { display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: rgba(0,0,0,0.6); border: 1px solid rgba(139,92,246,0.5); border-radius: 9999px; color: #a78bfa; font-weight: 600; text-decoration: none; transition: all 0.3s; }
        .project-link-button:hover { transform: translateY(-2px); border-color: rgba(168,85,247,0.8); box-shadow: 0 10px 25px rgba(168,85,247,0.3); }
        
        /* PDF Section Styles */
        .pdf-section { background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(139,92,246,0.3); padding: 2rem; margin-bottom: 3rem; }
        .pdf-section h3 { color: #a78bfa; font-size: 1.5rem; margin-bottom: 1.5rem; text-align: center; }
        .pdf-download-button { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: rgba(0,0,0,0.6); border: 1px solid rgba(139,92,246,0.5); border-radius: 9999px; color: #a78bfa; font-weight: 600; text-decoration: none; transition: all 0.3s; }
        .pdf-download-button:hover { transform: translateY(-2px); border-color: rgba(168,85,247,0.8); box-shadow: 0 10px 25px rgba(168,85,247,0.3); }
        
        /* Video Embed Styles */
        .video-section { background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(139,92,246,0.3); padding: 2rem; margin-bottom: 3rem; }
        .video-section h3 { color: #a78bfa; font-size: 1.5rem; margin-bottom: 1.5rem; text-align: center; }
        .video-embed-container { position: relative; width: 100%; padding-bottom: 56.25%; border-radius: 0.5rem; overflow: hidden; border: 1px solid rgba(139,92,246,0.3); }
        .video-embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
        
        /* Video Modal Styles */
        .video-modal { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.95); backdrop-filter: blur(10px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 2rem; }
        .video-modal-content { position: relative; width: 100%; max-width: 1200px; }
        .video-close { position: absolute; top: -3rem; right: 0; background: rgba(0,0,0,0.6); border: 1px solid rgba(139,92,246,0.5); color: #a78bfa; font-size: 2rem; width: 3rem; height: 3rem; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
        .video-close:hover { background: rgba(139,92,246,0.3); border-color: rgba(168,85,247,0.8); transform: scale(1.1); }
        .video-container { position: relative; width: 100%; padding-bottom: 56.25%; background: #000; border-radius: 1rem; overflow: hidden; border: 2px solid rgba(139,92,246,0.6); box-shadow: 0 20px 60px rgba(168,85,247,0.4); }
        .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
        
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.5rem; }
          .hero p { font-size: 1.25rem; }
          .headshot { width: 120px; height: 120px; }
          .reel-container { grid-template-columns: 1fr; }
          .project-grid { grid-template-columns: 1fr; }
          .project-meta { grid-template-columns: 1fr; }
          .project-images { grid-template-columns: 1fr; }
          .project-detail-image { height: 200px; }
          .section { min-height: auto; padding: 3rem 0; }
          .section.medium { padding: 4rem 0; }
          .project-detail-header h1 { font-size: 2rem; }
          .video-modal { padding: 1rem; }
          .video-close { top: -2.5rem; width: 2.5rem; height: 2.5rem; font-size: 1.5rem; }
          .project-logo { height: 100px; }
          .logos-section { gap: 2rem; padding: 2rem 0; }
          .resource-buttons { flex-direction: column; align-items: stretch; }
          .resource-button { justify-content: center; }
          .contact-links { flex-direction: column; align-items: stretch; }
          .contact-link { justify-content: center; }
        }
      `}</style>

            <div className="animated-bg" />
            <div className="grid-overlay" />

            {currentPage === 'home' ? renderHome() : renderProject(currentPage)}

            {/* Video Modal */}
            {videoModalOpen && (
                <div className="video-modal" onClick={closeVideo}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="video-close" onClick={closeVideo}>
                            <X size={24} />
                        </button>
                        <div className="video-container">
                            <iframe
                                src={currentVideo}
                                title="Demo Reel"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Portfolio;