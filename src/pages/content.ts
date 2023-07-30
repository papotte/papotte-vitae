import { personalData } from '../lib/contentful';

// Personal Information --> #hero section
export const name = personalData.displayName;
export const designation = personalData.title;
export const location = `${personalData.address.city}, ${personalData.address.country}`;
export const pronouns = personalData.pronouns;
export const website = personalData.website;
export const avatar = personalData.avatar;

console.log(personalData);

// About
export const about = personalData.bio;
// Work Experience --> #work section
export const work = personalData.experience;

// Projects --> #project section
export const projects = [];

// Education --> #education section
export const education = personalData.education;

// Contact --> #contact section
export const contact = [
	{
		source_name: 'Email',
		source: personalData.contact.email,
	},
];

export const socialLinks = personalData.socialMedia;

// Certifications --> #certificate section

export const certificates = [];

// Blogs --> #blogs section
export const blogs = [];

// Achievements --> #achievement section
export const achievements = [];

export const interests = personalData.interests;

export const skills = personalData.skills;

export const languages = personalData.languages;
