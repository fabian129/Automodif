# Deployment Guide: Automodif

Detta dokument beskriver hur du driftsätter webbplatsen på Vercel och kopplar e-postformulären via Resend.

## 1. Förberedelser
1. Se till att all kod är uppladdad/pushad till ett repository på GitHub (t.ex. under din användare eller inom en organisation). 

## 2. Vercel Deployment
1. Logga in på [Vercel](https://vercel.com).
2. Klicka på **"Add New..."** -> **"Project"**.
3. Importera repositoryt för Auto-modif från din GitHub.
4. I steget "Configure Project", öppna fliken **"Environment Variables"**.
5. Lägg till följande variabler:
   - `NEXT_PUBLIC_SITE_URL` = `https://automodif.se`
   - `CONTACT_EMAIL` = `automodif.v@gmail.com` (eller klientens riktiga mail dit formulären ska skickas)
   - `FROM_EMAIL` = `Automodif <onboarding@resend.dev>` (Mer om detta nedan under punkt 3).
   - `RESEND_API_KEY` = `(Din API-nyckel från Resend)`
   - `NEXT_PUBLIC_GA4_ID` = `G-XXXXXXXXXX` (Om ni använder Google Analytics, klistra in ert ID här).
6. Klicka på **Deploy**. Det tar ca 1 minut.
7. Vercel ger dig en temporär URL (ex. *automodif-123.vercel.app*). Gå in på projektets **Settings** -> **Domains** och lägg till den riktiga domänen (`automodif.se`). Följ Vercels instruktioner för att peka om domänens DNS (oftast är det att lägga in Vercels Name Servers, Type A, eller CNAME-record hos domänleverantören t.ex. Loopia/One.com).

## 3. Resend Integration (E-postformulär)
Resend används för att hantera "Boka Service" och "Ansök om Jobb"-formulären.

1. Skapa ett konto på [Resend](https://resend.com) och generera din **API-nyckel** under fliken "API Keys".
2. **Utan en verifierad domän**
   - Om du testkör med en on-boarding domän från Resend (`onboarding@resend.dev`), kommer Resend ENDAST tillåta att mail skickas TILL den mailadress som du registrerade Resend-kontot med. 
   - I Vercels miljövariabler ovan: Sätt `CONTACT_EMAIL` till den adressen under test.
3. **Med en verifierad domän (För Produktion)**
   - Välj "Add Domain" i Resend och skriv in `automodif.se`.
   - Resend kommer ge dig gäng DNS-records att lägga in hos din domänleverantör (där domänen köptes).
   - När verifieringen går igenom (ibland tar det upp till 24h) kan portalen skicka mallar från en riktig "noreply"-adress.
   - Ändra då `FROM_EMAIL` i din Vercel Dashboard till t.ex. `Automodif <noreply@automodif.se>`. Därefter kan `CONTACT_EMAIL` sättas till exakt vilken adress som helst (t.ex. automodif.v@gmail.com).

## Sammanfattning Miljövariabler
Detta är vad Vercels dashboard ska innehålla i slutet av processen:

```env
NEXT_PUBLIC_SITE_URL=https://automodif.se
RESEND_API_KEY=re_123456789...
CONTACT_EMAIL=automodif.v@gmail.com
FROM_EMAIL=Automodif <noreply@automodif.se>
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```
