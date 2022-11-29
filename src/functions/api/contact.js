/**
 * POST /api/contact
 */
 export async function onRequestPost(context) {
    try {
      let input = await context.request.formData();
  
      // Convert FormData to JSON
      // NOTE: Allows multiple values per key
      let output = {};
      for (let [key, value] of input) {
        let tmp = output[key];
        if (tmp === undefined) {
          output[key] = value;
        } else {
          output[key] = [].concat(tmp, value);
        }
      }
  
      let pretty = JSON.stringify(output, null, 2);


      send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: 'imanolrodriguezdemaya@gmail.com', name: 'Imanol Rodriguez' }],
            },
          ],
          from: {
            email: pretty.email,
            name: pretty.name,
          },
          subject: 'Look! No servers',
          content: [
            {
              type: 'text/plain',
              value: pretty.content,
            },
          ],
        }),
      })

      return new Response(pretty, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    } catch (err) {
      return new Response(JSON.stringify(err), { status: 400 });
    }
  }