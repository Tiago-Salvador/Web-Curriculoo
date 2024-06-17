
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Tiago-Salvador/Web-Curr-culo/main/assets/data/profile.json';
    const response = await fetch(url);
    const profileData = await response.json();
    return profileData;
}