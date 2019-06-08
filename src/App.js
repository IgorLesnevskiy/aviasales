import React from 'react';

import Filter from './components/Filter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.scss';

import logo from "./resources/images/logo.svg";
import ta from "./resources/images/companies/turkish-airlines.png";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);


// TODO priceConverter - приводит цену к локали; переводит цену из одно валюты в другую;
// TODO не нормализовать данные, считаем, что они ок
// TODO преобразование аднных под фильтр
// TODO генерация иконочного шрифта

function App() {
  return (
    <div className={"page"}>
      <div className={"page__inner"}>
        <div className={"page__logo"}>
          <a href="https://aviasales.ru" target={"_blank"}>
            <img src = {logo} alt={"Aviasales"} title={"Aviasales"} />
          </a>
        </div>
        <div className={"page__content"}>

          <div className={"layout"}>
            <div className={"layout__sidebar"}>
              <Filter/>
            </div>
            <div className={"layout__body"}>

              <div className={"tickets-list"}>
                <div className={"tickets-list__item"}>

                  <div className={"ticket"}>
                    <div className={"ticket__action-wrapper"}>
                      <div className={"ticket__action-inner"}>
                        <div className={"ticket__company-logo"}>
                          <a href={"#"}>
                              <img src={ta} />
                          </a>
                        </div>
                        <div className={"ticket__action-button"}>
                          <a href={"#"} className={"button"}>
                            <div className={"button__text"}>
                              Купить за <span className="currency-viewer" data-type="RUB">21 032</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={"ticket__info-wrapper"}>
                      <div className={"ticket__info-inner"}>
                        <div className={"ticket__flight-date"}>
                          <div className={"flight-date flight-date--to"}>
                            <div className={"flight-date__time"}>09:25</div>
                            <div className={"flight-date__place"}>VVO, Владивосток</div>
                            <div className={"flight-date__date"}>9 окт 2018, Пт</div>
                          </div>
                        </div>

                        <div className={"ticket__transfer"}>
                          <div className={"transfer-indicator"}>
                            <div className={"transfer-indicator__count"}>1 пересадка</div>

                            <div className={"transfer-indicator__decor transfer-indicator__decor--to"}>
                              <div className={"transfer-indicator__decor-icon"}>
                                <FontAwesomeIcon icon={['fas', 'plane']}/>
                              </div>
                            </div>

                            {/*<div className={"transfer-indicator__decor transfer-indicator__decor--from"}>*/}
                            {/*<FontAwesomeIcon icon={['fas', 'plane']}/>*/}
                            {/*</div>*/}

                          </div>
                        </div>

                        <div className={"ticket__flight-date"}>
                        <div className={"flight-date flight-date--from"}>
                          <div className={"flight-date__time"}>11:45</div>
                          <div className={"flight-date__place"}>Тель-Авив, TLV</div>
                          <div className={"flight-date__date"}>10 окт 2018, Пт</div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className={"tickets-list__item"}>

                  <div className={"ticket"}>
                    <div className={"ticket__action-wrapper"}>
                      <div className={"ticket__action-inner"}>
                        <div className={"ticket__company-logo"}>
                          <a href={"#"}>
                            <img src={ta} />
                          </a>
                        </div>
                        <div className={"ticket__action-button"}>
                          <a href={"#"} className={"button"}>
                            <div className={"button__text"}>
                              Купить за <span className="currency-viewer" data-type="RUB">21 032</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={"ticket__info-wrapper"}>
                      <div className={"ticket__info-inner"}>
                        <div className={"ticket__flight-date"}>
                          <div className={"flight-date flight-date--to"}>
                            <div className={"flight-date__time"}>09:25</div>
                            <div className={"flight-date__place"}>VVO, Владивосток</div>
                            <div className={"flight-date__date"}>9 окт 2018, Пт</div>
                          </div>
                        </div>

                        <div className={"ticket__transfer"}>
                          <div className={"transfer-indicator"}>
                            <div className={"transfer-indicator__count"}>1 пересадка</div>

                            <div className={"transfer-indicator__decor transfer-indicator__decor--to"}>
                              <div className={"transfer-indicator__decor-icon"}>
                                <FontAwesomeIcon icon={['fas', 'plane']}/>
                              </div>
                            </div>

                            {/*<div className={"transfer-indicator__decor transfer-indicator__decor--from"}>*/}
                            {/*<FontAwesomeIcon icon={['fas', 'plane']}/>*/}
                            {/*</div>*/}

                          </div>
                        </div>

                        <div className={"ticket__flight-date"}>
                          <div className={"flight-date flight-date--from"}>
                            <div className={"flight-date__time"}>11:45</div>
                            <div className={"flight-date__place"}>Тель-Авив, TLV</div>
                            <div className={"flight-date__date"}>10 окт 2018, Пт</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className={"tickets-list__item"}>

                  <div className={"ticket"}>
                    <div className={"ticket__action-wrapper"}>
                      <div className={"ticket__action-inner"}>
                        <div className={"ticket__company-logo"}>
                          <a href={"#"}>
                            <img src={ta} />
                          </a>
                        </div>
                        <div className={"ticket__action-button"}>
                          <a href={"#"} className={"button"}>
                            <div className={"button__text"}>
                              Купить за <span className="currency-viewer" data-type="RUB">21 032</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={"ticket__info-wrapper"}>
                      <div className={"ticket__info-inner"}>
                        <div className={"ticket__flight-date"}>
                          <div className={"flight-date flight-date--to"}>
                            <div className={"flight-date__time"}>09:25</div>
                            <div className={"flight-date__place"}>VVO, Владивосток</div>
                            <div className={"flight-date__date"}>9 окт 2018, Пт</div>
                          </div>
                        </div>

                        <div className={"ticket__transfer"}>
                          <div className={"transfer-indicator"}>
                            <div className={"transfer-indicator__count"}>1 пересадка</div>

                            <div className={"transfer-indicator__decor transfer-indicator__decor--to"}>
                              <div className={"transfer-indicator__decor-icon"}>
                                <FontAwesomeIcon icon={['fas', 'plane']}/>
                              </div>
                            </div>

                            {/*<div className={"transfer-indicator__decor transfer-indicator__decor--from"}>*/}
                            {/*<FontAwesomeIcon icon={['fas', 'plane']}/>*/}
                            {/*</div>*/}

                          </div>
                        </div>

                        <div className={"ticket__flight-date"}>
                          <div className={"flight-date flight-date--from"}>
                            <div className={"flight-date__time"}>11:45</div>
                            <div className={"flight-date__place"}>Тель-Авив, TLV</div>
                            <div className={"flight-date__date"}>10 окт 2018, Пт</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
