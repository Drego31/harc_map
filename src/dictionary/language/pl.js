export const pl = {
  title: {
    welcome: 'Strona powitalna',
    about: 'O nas',
    signIn: 'Logowanie',
    signUp: 'Rejestracja',
    remindPassword: 'Przypomnij hasło',
    changePassword: 'Zmień hasło',
    start: 'Start',
    temporaryPoints: 'Punkty czasowe',
    collectPoint: 'Zbierz punkt',
    collectedPoints: 'Zebrane punkty',
    map: 'Mapa',
    adminPanel: 'Panel admina',
    spectatorPanel: 'Panel obserwatora',
    editEvent: 'Edycja wydarzenia',
    scoreboard: 'Tabela wyników',
    newPoint: 'Nowy punkt',
    editPoint: 'Edycja punktu',
    searchPoint: 'Szukaj punktów',
    short: {
      temporaryPoints: 'Czasowe',
      collectPoint: 'Zbierz pkt',
      collectedPoints: 'Zebrane',
      adminPanel: 'Admin',
      spectatorPanel: 'Panel',
      editEvent: 'Wydarzenie',
      scoreboard: 'Wyniki',
      searchPoint: 'Szukaj',
    },
  },
  general: {
    showMore: 'pokaż&nbsp;więcej...',
    pointUnit: 'pkt',
    pointCategoryLevel: 'poziom',
    pointTemporary: 'Czasowy',
    pointPermanent: 'Do zebrania',
    backToStart: 'Przejdź do startowej',
    alreadyCollectedShort: 'Zdobyliście',
    fullAdmin: 'Uprawnienia administratora',
    limitedAdmin: 'Uprawnienia obserwatora',
    hide: 'Ukryj',
    edit: 'Edytuj',
    logout: 'Wyloguj',
    remove: 'Usuń',
    copied: 'Skopiowano do schowka',
    hello: 'Cześć',
    saved: 'Zapisano!',
    lightTheme: 'Jasny tryb',
    darkTheme: 'Ciemny tryb',
  },
  form: {
    field: {
      email: 'E-mail',
      password: 'Hasło',
      rePassword: 'Powtórz hasło',
      newPassword: 'Nowe hasło',
      reNewPassword: 'Powtórz nowe hasło',
      userTeam: 'Nazwa patrolu',
      eventName: 'Nazwa wydarzenia',
      eventId: 'Kod wydarzenia',
      pointId: 'Kod punktu',
      pointName: 'Nazwa punktu',
      pointType: 'Typ punktu',
      pointDateAndAppearanceTime: 'Data i czas pojawienia się punktu',
      pointDateAndExpirationTime: 'Data i czas wygaśnięcia punktu',
      pointCategory: 'Kategoria punktu',
      mapRefreshTime: 'Odświeżanie punktów na mapie co',
      eventStartDate: 'Data i czas rozpoczęcia wydarzenia',
      eventEndDate: 'Data i czas zakończenia wydarzenia',
    },
    assist: {
      pointId: 'Kod punktu jest generowany automatycznie',
      eventId: 'Kod wydarzenia jest generowany automatycznie',
      fieldNotRequired: 'Pole jest nieobowiązkowe',
    },
    validation: {
      required: 'Pole jest wymagane.',
      email: 'Musisz podać poprawny adres email.',
      min: 'Pole musi składać się z co najmniej {length} znaków.',
      max: 'Pole musi składać się z co najmniej {length} znaków.',
      confirmed: 'Pole nie zgadza się z polem potwierdzającym {target}.',
      length: 'Pole musi mieć długość {length}.',
      hasNumber: 'Pole powinno zawierać co najmniej jedną cyfrę.',
      hasCapitalize: 'Pole powinno zawierać co najmniej jedną wielką literę.',
    },
    button: {
      save: 'Zapisz',
      choose: 'wybierz',
      next: 'Dalej',
      goToLogin: 'Przejdź do logowania',
      setDefaultMapPositionAndZoom: 'Ustaw pozycję mapy',
      setPointMapPosition: 'Ustaw lokalizację punktu',
    },
  },
  page: {
    about: {
      appInfo: `to aplikacja przeznaczona do przeprowadzania gier terenowych dla harcerzy i nie tylko. Pomysłodawcą
        projektu jest drużynowy z Hufca ZHP Gdynia`,
      more: `Dominik Betka, który jest z zawodu programistą. Zebrał on zespół osób z branży,
        które chciały pomóc w formie wolontariatu. Poniżej możecie poznać ludzi, którzy poświęcili swój 
        czas na stworzenie tak ciekawego projektu. Dziękuję tym osobą za tą ciężką pracę.`,
      authors: 'O twórcach',
      leader: 'Team leader',
      frontDev: 'Front-end Developer',
      fullstack: 'Full-stack Developer',
      backDev: 'Back-end Developer',
      uxDesigner: 'UX Designer',
    },
    start: {
      search: 'Rozpocznij poszukiwania!',
      checkResults: 'Sprawdź swoje wyniki',
      alreadyCollected: 'Zebraliście już',
      eventEndTime: 'Wydarzenie kończy się o ',
      eventEndDate: 'Wydarzenie kończy się ',
      eventStartDate: 'Wydarzenie zaczynie się ',
      eventIsOutOfDate: 'Wydarzenie zostało zakończone!',
    },
    remindPassword: {
      content: `Wpisz swój e-mail, naciśnij przycisk „Dalej”, a my wyślemy 
        na niego link do zmiany twojego hasła.`,
      success: 'Link do odzyskania hasła wysłano na podany email.',
    },
    error: {
      title: 'Błąd 404',
      content: `Cześć! <br>
        Wygląda na to, że znajdujesz się nie tam gdzie trzeba... <br>
        <br>
        Poszukaj innej drogi! :)`,
    },
    collectedPoints: {
      sumTitle: 'Suma punktów wg kategorii',
      listTitle: 'Lista zebranych punktów',
      noPoints: 'Brak zebranych punktów',
    },
    scoreboard: {
      completionLevelOfTheGame: 'Poziom realizacji gry',
      scoreboard: 'Tabela wyników',
      completionLevelDetails: 'Wykresy przedstawiają ilość zebranych punktów przez uczestników z podziałem na kategorie.',
    },
    collectPoint: {
      content: `Aby zebrać punkt, udaj się do miejsca oznaczonego na mapie
        i wpisz do poniższego pola tekstowego kod z koperty znajdującej się 
        na miejscu. Następnie wciśnij przycisk „Dalej”.`,
    },
    timeoutPoints: {
      noResults: 'Brak aktywnych punktów!',
    },
    changePassword: {
      content: `Żeby zmienić swoje hasło, wpisz nowe hasło w poniższe pola, 
        a następnie naciśnij przycisk „Dalej”.`,
    },
    editEvent: {
      content: `Żeby zmienić swoje hasło, wpisz nowe hasło w poniższe pola, 
        a następnie naciśnij przycisk „Dalej”.`,
    },
    signUp: {
      registrationDone: 'Rejestracja przebiegła pomyślnie!',
      linkHasBeenSent: 'Link aktywacyjny został wysłany na wskazany adres e-mail:',
    },
    admin: {
      setMapPosition: {
        content: 'Wybierz pozycję mapy dla wydarzenia.',
      },
      setPointPosition: {
        content: 'Wybierz nową pozycję punktu.',
      },
      start: {
        message: 'Jesteś zalogowany jako administrator',
        editEvent: 'Edytuj wydarzenie',
        checkScoreboard: 'Sprawdź tabelę wyników',
      },
      searchPoint: {
        search: 'Szukaj',
        searchAssist: 'Szukaj po kodzie lub nazwie punktu.',
      },
    },
  },
  error: {
    eventIdIsRequired: 'Kod wydarzenia jest wymagany',
    elementIdIsRequiredForMap: 'Kod wydarzenia jest wymagany, by uruchomić mapę',
    fakeErrorInMockApi: 'Fałszywy błąd mockApi',
    dataAfterSignIn: 'Logowanie nie powiodło się ze względu na problem z pobraniem danych dotyczących konta. Spróbuj ponownie.',
  },
  apiError: {
    undefined: 'Wystąpił niezdefiniowany błąd. Skontaktuj się z twórcą aplikacji.',
    unauthorizedAccess: 'Brak uprawnień do wykonania tej akcji.',
    notOnline: 'Brak połączenia z serwerem.',

    getEventById: 'Pobieranie danych wydarzenia się nie powiodło.',
    getPointsByEventId: 'Pobieranie punktów dla wybranego wydarzenia się nie powiodło.',
    getCategoriesByEventId: 'Pobieranie kategorii dla wybranego wydarzenia się nie powiodło.',
    updateEvent: 'Edycja danych dla wybranego wydarzenia się nie powiodła.',
    eventStartDateIsEmpty: 'Data i czas rozpoczęcia wydarzenia musi być uzupełniona.',
    eventEndDateIsEmpty: 'Data i czas zakończenia wydarzenia musi być uzupełniona.',
    eventIsOutOfDate: 'Punkt nie został zebrany, ponieważ wydarzenie zostało zakończone.',
    eventBeforeStart: 'Punkt nie został zebrany, ponieważ wydarzenie nie zostało rozpoczęte.',
    collectPoint: 'Zebranie punktu nie powiodło się przez błąd serwera.',
    pointCollectedEarlier: 'Punkt o podanym kodzie został zebrany wcześniej.',
    pointNoExist: 'Punkt o podanym kodzie nie istnieje.',
    addPoint: 'Dodanie punktu nie powiodło się.',
    editPoint: 'Edycja punktu nie powiodła się.',
    removePoint: 'Usuwanie punktu nie powiodło się przez błąd serwera.',
    pointIdOrEventIdNotExist: 'Kod punktu lub wydarzenia jest niepoprawny.',

    all: 'Pobranie listy użytkowników nie powiodło się ze względu na błąd serwera.',
    signIn: 'Logowanie nie powiodło się ze względu na błąd serwera.',
    signInData: 'Logowanie nie powiodło się z powodu błędnego e-mail lub hasła.',
    signInOnOtherDevice: 'Nie możesz się zalogować — jesteś zalogowany na innym urządzeniu.',
    inactiveAccount: 'Konto jest nieaktywne - sprawdź e-mail i zaktywuj konto.',
    checkYourLoginSession: 'Twoja sesja jest pusta — nie jesteś zalogowany.',
    signUp: 'Rejestracja nie powiodła się ze względu na błąd serwera.',
    eventIdNotExist: 'Podany kod wydarzenia jest niepoprawny.',
    userExist: 'Użytkownik o podanym e-mail już istnieje.',
    remindPassword: 'Wysyłanie przypomnienia hasła nie powiodło się ze względu na błąd serwera.',
    signOut: 'Wylogowanie po stronie serwera nie powiodło. Zostałeś wylogowany lokalnie.',
    changePassword: 'Zmiana hasła się nie powiodła ze względu na błąd serwera.',
  },
  table: {
    numberOfCollected: 'Ilość zebranych',
    sumOfValues: 'Suma wartości',
    shortCategory: 'Kat.',
    category: 'Kategoria',
    shortPointId: 'Kod',
    team: 'Patrol',
    value: 'Wartość',
    score: 'Wynik',
    place: 'Miejsce',
    expand: 'Rozwiń',
    more: 'Więcej',
  },
  communicate: {
    map: {
      confirmPointRemove: 'Czy na pewno chcesz usunąć punkt?',
      pointRemovingInProgress: 'Trwa usuwanie punktu...',
      pointRemoved: 'Punkt został usunięty',
    },
    collectPoint: {
      congratulation: 'Gratulujemy!',
      youCollectedPoint: 'Zdobyłeś punkt!',
    },
    changePassword: {
      success: 'Twoje hasło zostało zmienione!',
    },
    editEvent: {
      success: 'Zapisanie nowych danych wydarzenia się powiodło.',
      positionIsRequired: 'Wymagane jest ustawienie pozycji mapy.',
    },
    addPoint: {
      positionIsRequired: 'Wymagane jest ustawienie lokalizacji punktu.',
    },
  },
  features: {
    timer: {
      toUpdate: 'Aktualizacja',
    },
    bannerMap: {
      defaultSuccessMessage: 'Nowa pozycja została wybrana.',
    },
    guide: {
      howAppWorks: 'Jak to działa?',
      howItWorks: {
        title: 'Jak to działa?',
        description: `Twoim zadaniem jest zebrać jak najwięcej punktów oraz odwiedzić jak największą ilość punktów 
          czasowych (nie można ich zebrać). Punkty na mapie aktualizują się co pełne `,
        add0: '. Zegar znajdujący się w lewym dolnym rogu mapy wskaże Ci czas pozostały do aktualizacji punktów.',
        add1: 'Pamiętaj by podczas gry się nie rozdzielać! Unikaj także spotkań z innymi patrolami.',
      },
      eventStart: {
        title: 'Czas trwania wydarzenia',
        description: `Wydarzenie będzie aktywne tylko w określonych godzinach. Informację o tym znajdziesz na zakładce 
          "Start" zaraz pod zdjęciem i nazwą wydarzenia. Przed rozpoczęciem wydarzenia punkty są niewidoczne 
          i nie można ich zebrać. Po wydarzeniu aplikacja będzie nadal dostępna i będzie można sprawdzić na niej swój wynik
          lub dowiedzieć się jakie punkty nie zostały zebrane, jednak zbieranie punktów będzie zablokowane.`,
        add0: 'Start: ',
        add1: 'Koniec: ',
      },
      permanentPoints: {
        title: 'Punkty, które możesz zebrać',
        description: `Punkty przeznaczone do zebrania oznaczone są na mapie kropami w kolorze niebieskim, pomarańczowym i czerwonym z czarną obwódką.
          Kolory reprezentują wartość punktu i przedmiotów znajdujących się na nim. Każdy punkt może być zebrany tylko raz,
          więc śpiesz się zanim inni zbiorą punkty przed tobą!`,
        add0: 'Niebieski ma wartość',
        add1: 'Pomarańczowy ma wartość',
        add2: 'Czerwony ma wartość',
      },
      seeOnTimeoutPoints: {
        title: 'Wypatruj punktów czasowych',
        description: `Punkty czasowe są oznaczone na mapie niebieską gwiazdką. Informacja kiedy są one widoczne na mapie
          jest dostępna na zakładce "Punkty czasowe". Poniżej opisane są stany w jakich występują punkty czasowe.`,
        add0: 'Spóźniłeś się - udaj się na inny punkt.',
        add1: 'Możesz przyjść na punkt.',
        add2: 'Punkt niedługo będzie dostępny',
      },
      startCollecting: {
        title: 'Rozpocznij poszukiwania',
        description: `Aby zebrać punkt, udaj się do miejsca oznaczonego na mapie kropką
        i wpisz do pola tekstowego na zakładce "Zbierz punkt" kod z koperty znajdującej się 
        na miejscu. Następnie wciśnij przycisk „Dalej” i ruszaj na kolejny punkt!`,
      },
      checkYourResults: {
        title: 'Sprawdź swoje wyniki',
        description: `Na zakładce "Zebrane punkty" możesz sprawdzić szczegóły na temat swoich zebranych punktów. 
          Dostępne są tam takie informacje jak:`,
        add0: 'wynik',
        add1: 'lista punktów',
        add2: 'czas zebrania',
        add3: 'lokalizacja',
        add4: 'kategoria',
        add5: 'wartość',
      },
    },
  },
};
