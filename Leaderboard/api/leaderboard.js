export default async function handler(req, res) {
  const url = 'https://api-prod.gaze.bet/api/leaderboard/7K2YWCAGYNTW/1f490abd-e2e5-4f28-8aa7-baa62067cfdc?dateStart=2026-04-27&dateEnd=2026-05-24';
  const response = await fetch(url);
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
