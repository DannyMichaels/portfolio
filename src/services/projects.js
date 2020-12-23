import axios from "axios";

const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/projects1`;

export const getAllProjects = async () => {
  try {
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    const projects = response.data.records;
    return projects;
  } catch (error) {
    throw error;
  }
};
