export default function template(date: Date, name: string): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meeting Notification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: auto;
                background: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #4CAF50;
            }
            p {
                line-height: 1.6;
            }
            .footer {
                margin-top: 20px;
                font-size: 0.9em;
                color: #777;
            }
            .footer a {
                color: #4CAF50;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Meeting Notification</h1>
            <p>Dear ${name},</p>
            <p>This is a reminder for your upcoming meeting scheduled on ${date.getDate()} on ${date.getTime()}.</p>
            <p>Please ensure you are prepared with all necessary documents and information.</p>
            <p>Best regards,</p>
            <p>Notification System</p>
        </div>
    </body>
    </html>`;
}