export const WEB3FORMS_ACCESS_KEY = "55317aa8-528a-4cf8-aa26-63c96e645fc0";

export async function submitToWeb3Forms(payload: Record<string, unknown>) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...payload }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message ?? "Submission failed");
  }
  return data;
}
