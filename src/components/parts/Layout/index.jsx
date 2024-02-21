import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Layout ({ children }){
  const [isDropdownOpen, setIsDropdown] = useState(false)

  return (
    <>
      <Navbar>
        <div className="flex-grow-1" />
        <Dropdown isOpen={isDropdownOpen} toggle={() => setIsDropdown(isOpend => !isOpend)}>
          {/*<DropdownToggle color='light' caret>*/}
          {/*  <i className="bi bi-translate me-2" />*/}
          {/*  {router.locale === LOCALE.JA ? (*/}
          {/*    <FormattedMessage id="language.japanese" />*/}
          {/*  ) : (*/}
          {/*    <FormattedMessage id="language.english" />*/}
          {/*  )}*/}
          {/*</DropdownToggle>*/}
          <DropdownToggle color='light' caret>
            <i className="bi bi-translate me-2" />
            <FormattedMessage id="language.japanese" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <FormattedMessage id="language.japanese" />
            </DropdownItem>
            <DropdownItem>
              <FormattedMessage id="language.english" />
            </DropdownItem>
          </DropdownMenu>
          {/*<DropdownMenu>*/}
          {/*  <DropdownItem onClick={() => router.replace(router.asPath, undefined, { locale: LOCALE.JA })} active={router.locale === LOCALE.JA}>*/}
          {/*    <FormattedMessage id="language.japanese" />*/}
          {/*  </DropdownItem>*/}
          {/*  <DropdownItem onClick={() => router.replace(router.asPath, undefined, { locale: LOCALE.EN })} active={router.locale === LOCALE.EN}>*/}
          {/*    <FormattedMessage id="language.english" />*/}
          {/*  </DropdownItem>*/}
          {/*</DropdownMenu>*/}
        </Dropdown>
      </Navbar>
      {children}
    </>
  );
};
