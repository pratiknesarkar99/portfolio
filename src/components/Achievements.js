import colorSharp from '../assets/img/color-sharp.png';

export const Achievements = () => {

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="experience-bx wow zoomIn">
              <h2 className="header">Achievements</h2>
              <ul>
                <li className="achievement-item-latest">
                  Mays MS Excellence Scholarship, Texas A&M University (2024-2025)
                </li>
                <li className="achievement-item-latest" style={{ marginTop: '10px', marginBottom: '10px', fontSize: '1.2em' }}>
                  Professional SCRUM Master 1, Scrum.org (Sept 14, 2024)
                </li>
                <li>
                  iTwin Accredited Developer, Bentley Systems (2021)
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
