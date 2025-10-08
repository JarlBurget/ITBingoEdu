import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AboutModal({ open, onClose }: AboutModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-2xl h-[85vh] sm:h-auto sm:max-h-[85vh] p-6 overflow-y-auto rounded">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-primary">Meist</DialogTitle>
          
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <p className="text-base leading-relaxed">
            Tartu Rakendusliku Kolledži IT-eriala pakub kaasaegset ja praktilist haridust, 
            mis ühendab teoreetilised teadmised ning praktilised oskused, 
            valmistades tudengeid ette edukaks karjääriks infotehnoloogia ja digivaldkonna 
            mitmekesistes valdkondades.
          </p>
          <p className="text-base leading-relaxed">
            Meie kolledžis saab õppida järgmisi IT- ja digivaldkonna erialasid.:
          </p>
          <ul className="space-y-2 pl-6">
            <li className="list-disc"><strong>Noorem tarkvaraarendaja</strong> - Kirjutada koodi ja luua toimivaid tarkvaralahendusi alates veebilehtedest kuni äppideniW</li>
            <li className="list-disc"><strong>UX/UI disaini nooremspetsialist</strong> - Loo kasutajasõbralikke ja visuaalselt köitvaid digilahendusi, ühendades tehnilised teadmised, loovuse ja inimkeskse mõtlemise</li>
            <li className="list-disc"><strong>IT AKADEEMIA</strong> - Build scalable software solutions</li>
            <li className="list-disc"><strong>IT-süsteemide nooremspetsialist</strong> - Õpid haldama arvutivõrke, kasutama IT-vahendeid ja lahendama tehnilisi probleeme loogilise mõtlemise ja süsteemsusega</li>
            <li className="list-disc"><strong>Kestlikud tehnoloogiad</strong> - Alates 3D-mudelitest kuni tehisintellekti ja kestliku arengu rakendusteni</li>
          </ul>
          <p className="text-base leading-relaxed text-muted-foreground">
            Selle interaktiivse mängu kaudu aitame õpilastel avastada oma huve 
            IT-valdkonnas ja leida just neile kõige sobivam karjäär. 
            Mäng pakub lõbusaid ülesandeid ja uusi teadmisi, mis aitavad paremini mõista erinevaid 
            IT-erialasid ja töörolle.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
