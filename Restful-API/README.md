## Running

```
node index.js
```


## Example

1. Hello Amjad
```
curl 127.0.0.1:3000/hello/amjad
```

2. Create a profile (adds to profiles.json)
```
curl -X POST -H "Content-Type: application/json" \
    --data '{"name": "Ehab Sohail", "title": "Professional Profile", "targetedKeywords": ["web developer", "fullstack developer", "software engineer"], "education": "Bechelors in Coputer Science from Information Technology University", "certification": "Winner of PuCon24", "contact": "033312345678"}' http://127.0.0.1:3000/profile/create
```

3. Read all profiles from profiles.csv:
```
curl 127.0.0.1:3000/profile/all
```
