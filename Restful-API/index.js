const express = require('express');
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

const app = express();

const profilesFilePath = path.join(__dirname, "profiles.json")

app.use(cors());
app.use(express.json())

app.get('/hello/amjad', (_, res) => {
    res.status(200).send("Hello Amjad")
});

app.post('/profile/create', (req, res) => {
    const payload = req.body;
    if (!payload) {
        return res.status(400).json({ error: 'request body is empty' });
    }

    const requiredFields = ["name", "title", "targetedKeywords", "education", "certification", "contact"]

    // check required fields in request data
    requiredFields.forEach(f => {
        if (!payload[f]) {
            return res.status(400).json({ error: `Missing required field: ${f}` });
        }
    })

    // append the new profile to the json file
    let profiles = []
    profiles = JSON.parse(fs.readFileSync(profilesFilePath, 'utf-8'))
    profiles.push(payload)

    fs.writeFileSync(profilesFilePath, JSON.stringify(profiles, 'utf-8'), (error) => {
        if (error) {
            return res.status(500).send({ error })
        }
        return res.status(201).send()
    })
})

app.get('/profile/all', (_, res) => {
    const results = [];
    const filePath = path.join(__dirname, 'profiles.csv');

    fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
        results.push({
            name: data.name,
            title: data.title,
            targetedKeywords: data.targetedKeywords.split('|'),
            education: data.education,
            certification: data.certification,
            contact: data.contact,
        });
    })
    .on('end', () => {
        res.status(200).json(results);
    })
    .on('error', (error) => {
        res.status(500).json({ error });
    });
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

