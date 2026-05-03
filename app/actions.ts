"use server";

import Airtable from "airtable";
import { Resend } from "resend";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

let airtableBase: Airtable.Base | null = null;
if (AIRTABLE_API_KEY && AIRTABLE_BASE_ID) {
  airtableBase = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
}

let resend: Resend | null = null;
if (RESEND_API_KEY) {
  resend = new Resend(RESEND_API_KEY);
}

const FROM_EMAIL = "LBSAA UK <no-reply@lbsaauk.org>";

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const rawData = {
      FullName: formData.get("fullName") as string,
      Email: formData.get("email") as string,
      WritingAs: formData.get("role") as string,
      SubjectArea: formData.get("subjectArea") as string,
      SubjectLine: formData.get("subjectLine") as string,
      Message: formData.get("message") as string,
    };

    console.log("Processing Contact Form:", rawData);

    // Save to Airtable
    if (airtableBase) {
      await airtableBase("Contact").create([
        {
          fields: rawData,
        },
      ]);
    } else {
      console.log("Missing Airtable credentials. Skipping Contact Airtable sync.");
    }

    // Send Email
    if (resend) {
      // Determine routing based on SubjectArea
      let toEmail = "info@lbsaauk.org";
      if (rawData.SubjectArea?.includes("Membership")) toEmail = "membership@lbsaauk.org";
      if (rawData.SubjectArea?.includes("Secretary") || rawData.SubjectArea?.includes("Governance")) toEmail = "secretary@lbsaauk.org";
      if (rawData.SubjectArea?.includes("President") || rawData.SubjectArea?.includes("Partnership")) toEmail = "president@lbsaauk.org";
      if (rawData.SubjectArea?.includes("Events")) toEmail = "events@lbsaauk.org";

      await resend.emails.send({
        from: FROM_EMAIL,
        to: toEmail,
        subject: `[Contact] ${rawData.SubjectLine}`,
        html: `
          <h3>New Contact Request</h3>
          <p><strong>From:</strong> ${rawData.FullName} (${rawData.Email})</p>
          <p><strong>Writing As:</strong> ${rawData.WritingAs}</p>
          <p><strong>Subject Area:</strong> ${rawData.SubjectArea}</p>
          <p><strong>Message:</strong></p>
          <p>${rawData.Message}</p>
        `,
      });
    } else {
      console.log("Missing Resend credentials. Skipping Contact email.");
    }

    return { success: true, message: "Message sent successfully." };
  } catch (error) {
    console.error("Contact Form Error:", error);
    return { success: false, message: "There was an error sending your message." };
  }
}

export async function submitMembershipForm(prevState: any, formData: FormData) {
  try {
    const rawData = {
      FirstName: formData.get("firstName") as string,
      LastName: formData.get("lastName") as string,
      Email: formData.get("email") as string,
      Mobile: formData.get("mobile") as string,
      LBSProgramme: formData.get("programme") as string,
      GraduationYear: Number(formData.get("graduationYear")),
      EmployerRole: formData.get("employerRole") as string,
      UKCity: formData.get("ukCity") as string,
      HowDidYouHear: formData.get("howDidYouHear") as string,
      AdditionalInfo: formData.get("additionalInfo") as string,
    };

    console.log("Processing Membership Form:", rawData);

    // Save to Airtable
    if (airtableBase) {
      await airtableBase("Membership").create([
        {
          fields: rawData,
        },
      ]);
    } else {
      console.log("Missing Airtable credentials. Skipping Membership Airtable sync.");
    }

    // Send Email via Resend
    if (resend) {
      // 1. Notify Exco
      await resend.emails.send({
        from: FROM_EMAIL,
        to: "membership@lbsaauk.org",
        subject: `[New Application] ${rawData.FirstName} ${rawData.LastName}`,
        html: `
          <h3>New Membership Application</h3>
          <p>A new application has been submitted by ${rawData.FirstName} ${rawData.LastName} (${rawData.LBSProgramme} '${rawData.GraduationYear}).</p>
          <p>You can view the full details in Airtable.</p>
        `,
      });

      // 2. Receipt to Applicant
      await resend.emails.send({
        from: FROM_EMAIL,
        to: rawData.Email,
        subject: "LBSAA UK Chapter - Application Received",
        html: `
          <h3>Application Received</h3>
          <p>Dear ${rawData.FirstName},</p>
          <p>Thank you for submitting your application to join the LBSAA United Kingdom Chapter.</p>
          <p>The Secretary will be in touch within five to ten working days after verifying your standing with the parent association in Lagos.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>LBSAA UK Chapter Exco</strong></p>
        `,
      });
    } else {
      console.log("Missing Resend credentials. Skipping Membership email.");
    }

    return { success: true, message: "Application submitted successfully." };
  } catch (error) {
    console.error("Membership Form Error:", error);
    return { success: false, message: "There was an error submitting your application." };
  }
}

export async function subscribeNewsletter(prevState: any, formData: FormData) {
  try {
    const rawData = {
      Email: formData.get("email") as string,
    };
    
    console.log("Processing Newsletter Subscription:", rawData);

    if (airtableBase) {
      await airtableBase("Newsletter").create([{ fields: rawData }]);
    } else {
      console.log("Missing Airtable credentials. Skipping Newsletter sync.");
    }

    return { success: true, message: "Subscribed successfully." };
  } catch (error) {
    console.error("Newsletter Error:", error);
    return { success: false, message: "Error subscribing." };
  }
}
