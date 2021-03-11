import axios from "axios";

const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/testimonials`;

export const getAllTestimonials = async () => {
  try {
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    const testimonials = response.data.records;
    return testimonials;
  } catch (error) {
    throw error;
  }
};
