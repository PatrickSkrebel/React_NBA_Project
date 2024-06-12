import express from 'express';
import { promises as fs } from 'fs';
import { json } from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all requests
app.use(json());

app.put('/api/teams/update', async (req, res) => {
    try {
        const updatedTeams = req.body.teams;
        await fs.writeFile('teamStats.json', JSON.stringify(updatedTeams, null, 2));
        res.status(200).json({ message: 'Teams data updated successfully' });
    } catch (error) {
        console.error('Error updating teams data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
