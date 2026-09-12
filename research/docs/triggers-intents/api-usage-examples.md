> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# API usage examples

> Sample requests to invoke Autonomous Agent Graph triggers with Bearer auth.

<Note>
  Replace `{workspace_id}`, `{trigger_id}`, and `{environment}` with values from your trigger config. Assign the correct **Agent Build** in **DEV** before testing these examples.
</Note>

All examples below demonstrate how to trigger **Autonomous Agent Graphs** using a **Bearer Token** and a JSON payload.

### Request Details

* **Method:** `POST`
* **Authorization:** Bearer Token (workspace-level)
* **Content-Type:** `application/json`

### Sample Payload

Replace:

* `{workspace_id}` with your workspace ID
* `{trigger_id}` with your trigger ID
* `{environment}` with DEV / UAT / PROD
* `workspace_api_key` with your workspace token

<CodeGroup>
  ```bash cURL - Single Endpoint theme={null}
  curl -X POST "https://app.phinite.ai/api/v1/ai/trigger/{workspace_id}/{trigger_id}/{environment}" \
    -H "Authorization: Bearer workspace_api_key" \
    -H "Content-Type: application/json" \
    -d '{
      "message": "start the task",
      "user_variables": {
        "key1": "value1",
        "key2": "value2"
      }
    }'
  ```

  ```bash cURL - Background Task Start theme={null}
  curl -X POST "https://app.phinite.ai/api/v1/ai/trigger/start/{workspace_id}/{trigger_id}/{environment}" \
    -H "Authorization: Bearer workspace_api_key" \
    -H "Content-Type: application/json" \
    -d '{
      "message": "start the task",
      "user_variables": {
        "key1": "value1",
        "key2": "value2"
      }
    }'
  ```

  ```bash cURL - Background Task Status theme={null}
  curl -X GET "https://app.phinite.ai/api/v1/ai/trigger/status/{workspace_id}/{workflow_id}" \
    -H "Authorization: Bearer workspace_api_key"
  ```

  ```python Python - Single Endpoint theme={null}
  import requests
  import json

  url = "https://app.phinite.ai/api/v1/ai/trigger/{workspace_id}/{trigger_id}/{environment}"

  payload = json.dumps({
    "message": "start the task",
    "user_variables": {
      "key1": "value1",
      "key2": "value2"
    }
  })

  headers = {
    'Authorization': 'Bearer workspace_api_key',
    'Content-Type': 'application/json'
  }

  response = requests.request("POST", url, headers=headers, data=payload)

  print(response.text)
  ```

  ```python Python - Background Task theme={null}
  import requests
  import json
  import time

  # Start the flow
  url_start = "https://app.phinite.ai/api/v1/ai/trigger/start/{workspace_id}/{trigger_id}/{environment}"

  payload = json.dumps({
    "message": "start the task",
    "user_variables": {
      "key1": "value1",
      "key2": "value2"
    }
  })

  headers = {
    'Authorization': 'Bearer workspace_api_key',
    'Content-Type': 'application/json'
  }

  response = requests.post(url_start, headers=headers, data=payload)
  result = response.json()
  workflow_id = result['workflow_id']

  # Poll for status
  url_status = f"https://app.phinite.ai/api/v1/ai/trigger/status/{{workspace_id}}/{workflow_id}"

  while True:
      status_response = requests.get(url_status, headers=headers)
      status_data = status_response.json()
      
      if status_data['status'] in ['completed', 'failed']:
          print(status_data)
          break
      
      print(f"Status: {status_data['status']}, Logs: {len(status_data['logs'])}")
      time.sleep(5)  # Poll every 5 seconds
  ```

  ```javascript JavaScript - Single Endpoint theme={null}
  const axios = require('axios');

  let data = JSON.stringify({
    "message": "start the task",
    "user_variables": {
      "key1": "value1",
      "key2": "value2"
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://app.phinite.ai/api/v1/ai/trigger/{workspace_id}/{trigger_id}/{environment}',
    headers: { 
      'Authorization': 'Bearer workspace_api_key', 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  ```

  ```javascript JavaScript - Background Task theme={null}
  const axios = require('axios');

  async function runBackgroundTask() {
    // Start the flow
    const startData = JSON.stringify({
      "message": "start the task",
      "user_variables": {
        "key1": "value1",
        "key2": "value2"
      }
    });

    const startConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://app.phinite.ai/api/v1/ai/trigger/start/{workspace_id}/{trigger_id}/{environment}',
      headers: { 
        'Authorization': 'Bearer workspace_api_key', 
        'Content-Type': 'application/json'
      },
      data: startData
    };

    const startResponse = await axios.request(startConfig);
    const workflowId = startResponse.data.workflow_id;
    console.log('Workflow started:', workflowId);

    // Poll for status
    const statusUrl = `https://app.phinite.ai/api/v1/ai/trigger/status/{workspace_id}/${workflowId}`;
    
    while (true) {
      const statusResponse = await axios.get(statusUrl, {
        headers: { 'Authorization': 'Bearer workspace_api_key' }
      });
      
      const status = statusResponse.data.status;
      console.log(`Status: ${status}, Logs: ${statusResponse.data.logs.length}`);
      
      if (status === 'completed' || status === 'failed') {
        console.log('Final result:', statusResponse.data);
        break;
      }
      
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
    }
  }

  runBackgroundTask();
  ```

  ```go Go - Single Endpoint theme={null}
  package main

  import (
    "fmt"
    "strings"
    "net/http"
    "io"
  )

  func main() {
    url := "https://app.phinite.ai/api/v1/ai/trigger/{workspace_id}/{trigger_id}/{environment}"
    method := "POST"

    payload := strings.NewReader(`{
      "message": "start the task",
      "user_variables": {
        "key1": "value1",
        "key2": "value2"
      }
    }`)

    client := &http.Client {}
    req, err := http.NewRequest(method, url, payload)

    if err != nil {
      fmt.Println(err)
      return
    }
    req.Header.Add("Authorization", "Bearer workspace_api_key")
    req.Header.Add("Content-Type", "application/json")

    res, err := client.Do(req)
    if err != nil {
      fmt.Println(err)
      return
    }
    defer res.Body.Close()

    body, err := io.ReadAll(res.Body)
    if err != nil {
      fmt.Println(err)
      return
    }
    fmt.Println(string(body))
  }
  ```

  ```go Go - Background Task theme={null}
  package main

  import (
    "encoding/json"
    "fmt"
    "io"
    "net/http"
    "strings"
    "time"
  )

  type StartResponse struct {
    WorkflowID string `json:"workflow_id"`
    Status     string `json:"status"`
  }

  type StatusResponse struct {
    WorkflowID string        `json:"workflow_id"`
    Status     string        `json:"status"`
    Logs       []interface{} `json:"logs"`
    Response   interface{}   `json:"response"`
  }

  func main() {
    // Start the flow
    startURL := "https://app.phinite.ai/api/v1/ai/trigger/start/{workspace_id}/{trigger_id}/{environment}"
    
    payload := strings.NewReader(`{
      "message": "start the task",
      "user_variables": {
        "key1": "value1",
        "key2": "value2"
      }
    }`)

    client := &http.Client{}
    req, _ := http.NewRequest("POST", startURL, payload)
    req.Header.Add("Authorization", "Bearer workspace_api_key")
    req.Header.Add("Content-Type", "application/json")

    res, _ := client.Do(req)
    defer res.Body.Close()

    body, _ := io.ReadAll(res.Body)
    
    var startResp StartResponse
    json.Unmarshal(body, &startResp)
    
    fmt.Printf("Workflow started: %s\n", startResp.WorkflowID)

    // Poll for status
    statusURL := fmt.Sprintf("https://app.phinite.ai/api/v1/ai/trigger/status/{workspace_id}/%s", startResp.WorkflowID)
    
    for {
      statusReq, _ := http.NewRequest("GET", statusURL, nil)
      statusReq.Header.Add("Authorization", "Bearer workspace_api_key")
      
      statusRes, _ := client.Do(statusReq)
      statusBody, _ := io.ReadAll(statusRes.Body)
      statusRes.Body.Close()
      
      var statusResp StatusResponse
      json.Unmarshal(statusBody, &statusResp)
      
      fmt.Printf("Status: %s, Logs: %d\n", statusResp.Status, len(statusResp.Logs))
      
      if statusResp.Status == "completed" || statusResp.Status == "failed" {
        fmt.Printf("Final result: %s\n", string(statusBody))
        break
      }
      
      time.Sleep(5 * time.Second)
    }
  }
  ```

  ```java Java - Single Endpoint theme={null}
  OkHttpClient client = new OkHttpClient().newBuilder().build();
  MediaType mediaType = MediaType.parse("application/json");
  RequestBody body = RequestBody.create(mediaType, 
    "{\n    \"message\": \"start the task\",\n    \"user_variables\": {\n      \"key1\": \"value1\",\n      \"key2\": \"value2\"\n    }\n  }");

  Request request = new Request.Builder()
    .url("https://app.phinite.ai/api/v1/ai/trigger/{workspace_id}/{trigger_id}/{environment}")
    .method("POST", body)
    .addHeader("Authorization", "Bearer workspace_api_key")
    .addHeader("Content-Type", "application/json")
    .build();

  Response response = client.newCall(request).execute();
  System.out.println(response.body().string());
  ```

  ```php PHP - Single Endpoint theme={null}
  <?php

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://app.phinite.ai/api/v1/ai/trigger/{workspace_id}/{trigger_id}/{environment}',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => json_encode([
      "message" => "start the task",
      "user_variables" => [
        "key1" => "value1",
        "key2" => "value2"
      ]
    ]),
    CURLOPT_HTTPHEADER => array(
      'Content-Type: application/json',
      'Authorization: Bearer workspace_api_key'
    ),
  ));

  $response = curl_exec($curl);
  curl_close($curl);

  echo $response;
  ?>
  ```

  ```ruby Ruby - Single Endpoint theme={null}
  require "uri"
  require "json"
  require "net/http"

  url = URI("https://app.phinite.ai/api/v1/ai/trigger/{workspace_id}/{trigger_id}/{environment}")

  https = Net::HTTP.new(url.host, url.port)
  https.use_ssl = true

  request = Net::HTTP::Post.new(url)
  request["Authorization"] = "Bearer workspace_api_key"
  request["Content-Type"] = "application/json"
  request.body = JSON.dump({
    "message" => "start the task",
    "user_variables" => {
      "key1" => "value1",
      "key2" => "value2"
    }
  })

  response = https.request(request)
  puts response.read_body
  ```
</CodeGroup>

***

## Error Responses

<CodeGroup>
  ```json 401 Unauthorized theme={null}
  {
    "detail": "Invalid authentication credentials"
  }
  ```

  ```json 422 Unprocessable Entity theme={null}
  {
    "detail": [
      {
        "type": "dict_type",
        "loc": [
          "body",
          "user_variables"
        ],
        "msg": "Input should be a valid dictionary",
        "input": "string"
      }
    ]
  }
  ```

  ```json 500 Server Error theme={null}
  {
    "detail": "Process query failed: Internal server error"
  }
  ```
</CodeGroup>

***

## Common Use Cases

* Automated incident response from monitoring systems
* Scheduled data processing and reporting
* Webhook-triggered workflows from external platforms
* Background batch processing with real-time progress tracking
* Long-running data transformation and enrichment tasks
* Periodic system health checks and maintenance routines

***

## Notes & Best Practices

<Warning>
  **Choose the right execution mode:** Use single endpoint API only for simple flows under 120-150 seconds. Use background task for most autonomous workflows. Use cron job for scheduled, recurring tasks.
</Warning>

* **Validate bearer tokens:** Always verify authentication in DEV environment before deploying to PROD.
* **Use user\_variables for context:** Pass structured data through `user_variables` instead of embedding everything in the message field.
* **Poll status intelligently:** When using background tasks, implement appropriate polling intervals (e.g., every 5-10 seconds) to check status without overwhelming the API.
* **Monitor execution time:** Be aware of the 2700-second maximum for background tasks. Design flows to complete within this limit.
* **Test thoroughly:** Always test in DEV environment before promoting to UAT and PROD.
* **Keep triggers descriptive:** Use clear, meaningful names for triggers to facilitate internal reference and debugging.
* **Handle webhooks appropriately:** Validate payload shape and auth before promoting webhook callers to PROD.

## Related

* [Trigger APIs](/triggers-intents/trigger-apis)
* [Mapping triggers](/triggers-intents/mapping)
* [Deploy a trigger](/agents/deploy-trigger)
