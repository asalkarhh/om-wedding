/**
 * Single source of truth for wedding invitation content.
 * All guest-facing texts are in Marathi.
 */

export const weddingData = {
  couple: {
    groom: 'वैभव',
    bride: 'प्रणाली',
    namesDisplay: 'वैभव आणि प्रणाली',
  },

  hero: {
    invocation: '॥ श्री गणेशाय नमः ॥',
    badge: 'शुभविवाह',
    date: 'गुरुवार, २६ नोव्हेंबर २०२६',
    invitationCopy:
      'आमच्या आयुष्यातील या आनंदाच्या क्षणी आपण सहकुटुंब उपस्थित राहून आम्हाला आशीर्वाद द्यावेत, ही मनापासून विनंती.',
    ctaButtonText: 'कार्यक्रम पाहा',
    photo: {
      src: '/RP905815.jpg',
      alt: 'वैभव आणि प्रणाली - झेंडूच्या फुलांच्या माळांमध्ये एकमेकांकडे हसताना',
      caption: 'तुझ्या हसण्यात माझं सगळं जग.',
      width: 1333,
      height: 2000,
    },
  },

  countdown: {
    targetTime: '2026-11-26T12:50:00+05:30', // Auspicious Muhurt: 26 Nov 2026, 12:50 PM IST
    heading: 'शुभमुहूर्ताची उत्सुकता',
    subtitle: 'विवाह सोहळ्यास उरलेला वेळ',
    labels: {
      days: 'दिवस',
      hours: 'तास',
      minutes: 'मिनिटे',
      seconds: 'सेकंद',
    },
    completedMessage: 'शुभमंगल सावधान! आजचा मंगलमय शुभ दिवस!',
  },

  programme: {
    heading: 'विवाह कार्यक्रम',
    date: 'गुरुवार, २६ नोव्हेंबर २०२६',
    venueNotice: 'सर्व कार्यक्रम विवाहस्थळी संपन्न होतील.',
    events: [
      {
        id: 'haldi',
        title: 'हळदी समारंभ',
        time: 'सकाळी १०:०० वाजता',
        isoTime: '2026-11-26T10:00:00+05:30',
        type: 'haldi', // soft turmeric accent styling
        description: 'पारंपरिक हळदीचा मंगल सोहळा',
      },
      {
        id: 'lagna',
        title: 'शुभविवाह',
        time: 'दुपारी १२:५० वाजता',
        isoTime: '2026-11-26T12:50:00+05:30',
        type: 'wedding', // strongest visual emphasis
        description: 'शुभमंगल सावधान - मंगल अक्षता व पाणिग्रहण',
        isPrimary: true,
      },
      {
        id: 'snehabhojan',
        title: 'स्नेहभोजन',
        time: 'सकाळी ११:०० ते दुपारी ३:००',
        isoTimeStart: '2026-11-26T11:00:00+05:30',
        isoTimeEnd: '2026-11-26T15:00:00+05:30',
        type: 'feast',
        description: 'स्वादिष्ट रुचकर स्नेहभोजन',
      },
    ],
  },

  venue: {
    heading: 'विवाहस्थळ',
    name: 'कृष्णलिला मंगल कार्यालय',
    address: 'कराड रोड, विटा, ता. खानापूर, जि. सांगली',
    mapsUrl: 'https://maps.app.goo.gl/nswLEgKbaUsnbMbk8?g_st=ac',
    mapsButtonText: 'नकाशावर पाहा',
  },

  gallery: {
    heading: 'आमचे काही खास क्षण',
    photos: [
      {
        id: 'outdoors-hands',
        src: '/RP905418.jpg',
        alt: 'वैभव आणि प्रणाली निसर्गरम्य वातावरणात हातात हात धरून हसताना',
        caption: 'तुझ्या सोबतीने प्रत्येक क्षण खास.',
        width: 1333,
        height: 1999,
        aspectRatio: '2/3',
      },
      {
        id: 'foreheads-touching',
        src: '/RP905407.jpg',
        alt: 'वैभव आणि प्रणाली निसर्गात एकमेकांच्या कपाळाला कपाळ टेकवून उभे असताना',
        caption: 'हातात हात, आयुष्यभराची साथ.',
        width: 1333,
        height: 2000,
        aspectRatio: '2/3',
      },
      {
        id: 'temple-arch',
        src: '/RP905272.jpg',
        alt: 'वैभव आणि प्रणाली मंदिराच्या लाल आणि सुवर्ण कमानीखाली उभे असताना',
        caption: 'एकमेकांकडे पाहताना वेळही थांबतो.',
        width: 1333,
        height: 2000,
        aspectRatio: '2/3',
      },
      {
        id: 'pillar-close-up',
        src: '/RP905305.jpg',
        alt: 'वैभव आणि प्रणाली मंदिराच्या दगडी खांबाजवळ बसलेले असताना',
        caption: 'तुझ्या जवळ असण्यातच सगळं सुख.',
        width: 1333,
        height: 2000,
        aspectRatio: '2/3',
      },
      {
        id: 'deepmala-wide',
        src: '/RP905303.jpg',
        alt: 'वैभव आणि प्रणाली भव्य दगडी दीपमाळेच्या पायथ्याशी बसलेले असताना',
        caption: 'आपल्या नव्या प्रवासाची सुंदर सुरुवात.',
        width: 1333,
        height: 2000,
        aspectRatio: '2/3',
        isTallFeature: true, // Deepmala photo given tall presence to retain majestic composition
      },
    ],
  },

  closing: {
    blessing: 'आपली उपस्थिती आणि आशीर्वाद हाच आमच्यासाठी सर्वांत मोठा आहेर.',
    signature: 'सस्नेह, वैभव आणि प्रणाली',
  },

  meta: {
    siteTitle: 'वैभव आणि प्रणाली | शुभविवाह निमंत्रण',
    productionUrl: import.meta.env.VITE_SITE_URL || '',
  },
};
