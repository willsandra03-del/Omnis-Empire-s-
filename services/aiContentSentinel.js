const axios = require('axios');
const { CronJob } = require('cron');

// Function to fetch trending topics from Google Trends
async function fetchGoogleTrends() {
    try {
        const response = await axios.get('https://api.google.com/trends/v1'); // Replace with actual Google Trends API endpoint
        return response.data;
    } catch (error) {
        console.error('Error fetching Google Trends:', error);
        throw error;
    }
}

// Function to generate SEO-optimized post
function generateSEOPost(trendingTopic) {
    const title = `Understanding ${trendingTopic} through Executive Business Psychology`;
    const content = `In this post, we explore how ${trendingTopic} affects today's business landscape from a psychological perspective...`;
    return {
        title,
        content,
    };
}

// Cron job to generate 5 posts daily
const job = new CronJob('0 0 * * *', async () => { // Runs daily at midnight
    try {
        const trends = await fetchGoogleTrends();
        const posts = trends.slice(0, 5).map(generateSEOPost);
        console.log('Generated Posts:', posts);
        // Code to save posts to the blog...
    } catch (error) {
        console.error('Error generating posts:', error);
    }
});

job.start();

// Export the generateSEOPost function for further usage
module.exports = { generateSEOPost };