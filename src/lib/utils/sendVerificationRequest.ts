import { resend } from "@/lib/resend/resend";
import MagicLinkEmail from "@/emails/MagicLinkEmail";

type VerificationRequestParams = {
  identifier: string;
  url: string;
  provider: any;
  theme: any;
};

export async function sendVerificationRequest(
  params: VerificationRequestParams
): Promise<{ success: boolean; data?: any }> {
  const { identifier, url, provider, theme } = params;
  const { host } = new URL(url);

  try {
    const data = await resend.emails.send({
      from: "noreply@firestarta.dev",
      to: [identifier],
      subject: `Log in to ${host}`,
      text: text({ url, host }),
      react: MagicLinkEmail({ url, host }),
    });
    return { success: true, data };
  } catch (error) {
    throw new Error("Failed to send the verification Email.");
  }
}

type TextParams = {
  url: string;
  host: string;
};

function text({ url, host }: TextParams): string {
  return `Sign in to ${host}\n${url}\n\n`;
}
