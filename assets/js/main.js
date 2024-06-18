
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `carregando:${profileData.email}`;
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}
function updateEducation(educationData) {
    const educationContainer = document.getElementById('profile.educationContainer');
    educationContainer.innerHTML = educationData.map(curso => {
        return `
        
            <li class="education-item">
                <div class="education-details">
                     <h2 class="faculdade-titulo">
                        <img src="${curso.logo_url}" alt="Logo ${curso.instituicao}" class="faculdade-logo">
                         ${curso.curso}
                    </h2>
                    
                    <p><strong>Duração:</strong> ${curso.duracao}</p>
                    <p><strong>Instituição:</strong> ${curso.instituicao}</p>
                    ${curso.certificado_url ? `
                        <div class="certificado-details">
                            <p><strong>Certificado:</strong></p>
                            <img class="certificado-img" src="${curso.certificado_url}" alt="Certificado de ${curso.curso}">
                        </div>` : ''
                    }
                </div>
            </li>
        `;
    }).join('');
}



function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience');
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `;
    }).join('');
}
function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    if (portfolio) {
        portfolio.innerHTML = profileData.portfolio.map(project => {
            return `
                <li>
                    <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                    <a href="${project.url}" target="_blank">${project.url}</a>
                </li>
            `;
        }).join('');
    }
}


(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updateEducation(profileData.education);
    updateProfessionalExperience(profileData);
    updatePortfolio(profileData);
})();