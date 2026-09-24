#!/usr/bin/env python3
"""Build a self-contained WasteVantage expo invite HTML email."""

from pathlib import Path
import base64

ROOT = Path(__file__).resolve().parent
logo_png = (ROOT / "wastevantage-logo.png").read_bytes()
logo_src = "data:image/png;base64," + base64.b64encode(logo_png).decode()

html = f"""<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Visit WasteVantage at Waste Expo Australia</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    body, table, td, a {{ -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }}
    table, td {{ mso-table-lspace: 0pt; mso-table-rspace: 0pt; }}
    img {{ -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }}
    body {{ margin: 0; padding: 0; width: 100% !important; height: 100% !important; }}
    a {{ color: #0088F0; }}
    @media screen and (max-width: 620px) {{
      .container {{ width: 100% !important; }}
      .px {{ padding-left: 24px !important; padding-right: 24px !important; }}
    }}
  </style>
</head>
<body style="margin:0; padding:0; background-color:#F3F5F7; font-family:Arial, Helvetica, sans-serif;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all;">
    Waste Expo Australia, 28–29 October. Stand D161. 30 minutes with Andrew — no hard sell.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F3F5F7;">
    <tr>
      <td align="center" style="padding:32px 12px 40px 12px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px; background-color:#FFFFFF; border-radius:12px; overflow:hidden;">

          <!-- Logo -->
          <tr>
            <td align="center" class="px" style="padding:36px 48px 8px 48px; background-color:#FFFFFF;">
              <img src="{logo_src}" width="200" alt="WasteVantage" style="display:block; width:200px; max-width:200px; height:auto;">
            </td>
          </tr>

          <!-- Accent -->
          <tr>
            <td align="center" style="padding:16px 48px 0 48px;">
              <table role="presentation" width="48" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="height:3px; background-color:#0088F0; font-size:0; line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td class="px" style="padding:28px 48px 0 48px; color:#1A1A1A; font-size:16px; line-height:1.6;">
              <p style="margin:0 0 16px 0;">Hi There,</p>
              <p style="margin:0 0 16px 0;">We’d like to invite you and the team to <strong>Waste Expo Australia</strong>, 28–29 October at the MCEC.</p>
              <p style="margin:0;">You’ll find us at <strong>Stand D161</strong>. Come and visit us.</p>
            </td>
          </tr>

          <!-- Event bar -->
          <tr>
            <td class="px" style="padding:24px 48px 0 48px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F8FC; border:1px solid #E2EBF3; border-radius:8px;">
                <tr>
                  <td style="padding:16px 20px; color:#1A1A1A; font-size:14px; line-height:1.6;">
                    <strong style="color:#0088F0;">Waste Expo Australia</strong><br>
                    28–29 October 2026 &nbsp;·&nbsp; MCEC, Melbourne &nbsp;·&nbsp; Stand D161
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="px" style="padding:28px 48px 0 48px; color:#1A1A1A; font-size:16px; line-height:1.65;">
              <p style="margin:0 0 16px 0;">This is not a sales stop. If dispatch still runs on phone bookings, paper run sheets, and “where’s my bin” calls, bring that with you.</p>
              <p style="margin:0;">Sit down with <strong>Andrew</strong>, our consultant, for about 30 minutes. He is there to listen and understand the problems in your business — pain points, ideas you want feedback on, things that are not working — and to give some guidance for free. <strong>No hard sell.</strong></p>
            </td>
          </tr>

          <!-- Typical things -->
          <tr>
            <td class="px" style="padding:28px 48px 0 48px; color:#1A1A1A; font-size:16px; line-height:1.65;">
              <p style="margin:0 0 12px 0;"><strong>Typical things operators bring:</strong></p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:0 0 10px 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAFBFC; border-left:3px solid #0088F0;">
                      <tr>
                        <td style="padding:12px 16px; color:#1A1A1A; font-size:15px; line-height:1.5;">
                          Bins going missing, and the calls that follow
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 10px 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAFBFC; border-left:3px solid #0088F0;">
                      <tr>
                        <td style="padding:12px 16px; color:#1A1A1A; font-size:15px; line-height:1.5;">
                          Jobs still living on the phone and paper run sheets
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAFBFC; border-left:3px solid #0088F0;">
                      <tr>
                        <td style="padding:12px 16px; color:#1A1A1A; font-size:15px; line-height:1.5;">
                          “How should we be managing our bins?” — and anything else that is not working
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Close + CTA -->
          <tr>
            <td class="px" style="padding:28px 48px 0 48px; color:#1A1A1A; font-size:16px; line-height:1.65;">
              <p style="margin:0 0 24px 0;">If 30 minutes with Andrew would help, reply with a preferred day (28 or 29 October) and a rough time. Otherwise, just come to the stand.</p>
              <p style="margin:0 0 28px 0;">We’d like to see you at the expo.</p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="border-radius:6px; background-color:#0088F0;">
                    <a href="https://YOUR-DOMAIN/waste-expo#book" target="_blank" style="display:inline-block; padding:13px 22px; font-family:Arial, Helvetica, sans-serif; font-size:15px; font-weight:bold; color:#FFFFFF; text-decoration:none; border-radius:6px;">
                      Book 30 minutes
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:14px 0 0 0; color:#6B7280; font-size:13px; line-height:1.5;">
                Reply to this email to book 30 minutes with Andrew.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="px" style="padding:36px 48px 36px 48px; color:#6B7280; font-size:12px; line-height:1.6;">
              WasteVantage &nbsp;·&nbsp; Stand D161 &nbsp;·&nbsp; 28–29 October 2026<br>
              <a href="https://www.wasteexpoaustralia.com.au/" style="color:#0088F0; text-decoration:none;">wasteexpoaustralia.com.au</a>
              &nbsp;·&nbsp;
              <a href="https://ihublogistics.com/wastevantage/" style="color:#0088F0; text-decoration:none;">WasteVantage</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
"""

out = ROOT / "waste-expo-invite.html"
out.write_text(html, encoding="utf-8")
print(f"Wrote {out} ({out.stat().st_size} bytes)")
