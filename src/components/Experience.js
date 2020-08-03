import React from 'react';
import HeaderPage from './HeaderPage'

function Experience() {
  return (
    <div className="experience">
		<div className="container">
			<HeaderPage num={"03"} name={"Experience"}/>    
			<h1>Employment history</h1>
			<div className="experience__timeline">
				<div className="experience__items">
					<div className="experience__item">
						<p>Aug. 2015 - Mar 2016</p>
						<h2>Product Engineer</h2>
						<p>KONUX GmbH<br />
						Flößergasse 2, 81369 München, Germany
						</p>
						<h3>Main duties</h3>
						<p>Execution of hazard analysis, FMEA and documentation of development processes. Planning, organization and execution of development projects from concept to prototype. Establishing 3D Data and drawings using SOLIDWORS. Testing design concepts concerning the implementation of a torque sensor.</p>
					</div>
					<div className="experience__item">
						<p>Sept. 2016 - Sept. 2019</p>
						<h2>Territory Technical Manager</h2>
						<p>Dassault Systemes Deutschland GmbH<br />
							Joseph-Wild-Straße 20, 81829 München, Germany</p>
						<h3>Main Duties</h3>
						<p>Provide technical sales support for SOLIDWORKS products as part of the technical team responsible in Germany, Austria, Switzerland, Czech Republic, Slovakia, Hungary and Poland. Preparation, support and implementation of product presentations, webinar series, as well as training and education of regional sales partners. </p>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}

export default Experience;
