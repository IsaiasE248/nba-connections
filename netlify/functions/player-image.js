const KEY = '5960282373msh363e9684c6578fdp1d1bc8jsn933ebb428933';
exports.handler = async (event) => {
  const name = event.queryStringParameters?.name;
    if (!name) return { statusCode: 400, body: JSON.stringify({ error: 'Missing name' }) };
      try {
          const r = await fetch(`https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo?playerName=${encodeURIComponent(name)}&statsToGet=averages`, {
                headers: { 'x-rapidapi-key': KEY, 'x-rapidapi-host': 'tank01-fantasy-stats.p.rapidapi.com' }
                    });
                        const d = await r.json();
                            const p = d?.body?.[0];
                                const imgUrl = p ? (p.espnHeadshot || p.nbaComHeadshot || p.yahooHeadshot || null) : null;
                                    return { statusCode: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'public, max-age=604800' }, body: JSON.stringify({ name, imgUrl }) };
                                      } catch(e) {
                                          return { statusCode: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ name, imgUrl: null }) };
                                            }
                                            };
