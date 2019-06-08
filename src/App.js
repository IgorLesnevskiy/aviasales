import React from 'react';

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


              <div className={"filter"}>
                <div className={"filter__section"}>

                  <div className={"filter-section"}>
                    <div className={"filter-section__title"}>Валюта</div>

                    <div className={"filter-section__rows filter-section__rows--radio-row-list"}>
                      <div className={"filter-section__row"}>

                        <div className={"currency-checker-tabs"}>
                          <div className={"currency-checker-tabs__item"}>

                            <div className={"currency-checker"}>
                              <input type="radio" value="RUB" name="currency" id="currency-1"
                                     className={"currency-checker__input"} defaultChecked={"true"}/>
                              <label htmlFor="currency-1" className={"currency-checker__label"}>RUB</label>
                            </div>

                          </div>
                          <div className={"currency-checker-tabs__item"}>

                            <div className={"currency-checker"}>
                              <input type="radio" value="USD" name="currency" id="currency-2"
                                     className={"currency-checker__input"} />
                              <label htmlFor="currency-2" className={"currency-checker__label"}>USD</label>
                            </div>

                          </div>
                          <div className={"currency-checker-tabs__item"}>

                            <div className={"currency-checker"}>
                              <input type="radio" value="EUR" name="currency" id="currency-3"
                                     className={"currency-checker__input"}/>
                              <label htmlFor="currency-3" className={"currency-checker__label"}>EUR</label>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
                <div className={"filter__section"}>

                  <div className={"filter-section"}>
                    <div className={"filter-section__title"}>Количество пересадок</div>
                    <div className={"filter-section__rows filter-section__rows--checkboxes-list"}>
                      <div className={"filter-section__row"}>

                        <div className={"checkbox-line checkbox-line--simple"}>
                          <div className={"checkbox-line__checkbox-wrapper"}>

                            <label className={"checkbox checkbox-line__checkbox"}>
                              <div className={"checkbox__box"}>
                                <input type={"checkbox"} id={"checkbox-1"} />

                                <FontAwesomeIcon icon={['fas', 'check']} className="checkbox__tick"/>
                              </div>
                              <div className={"checkbox__label"}>
                                Все
                              </div>
                            </label>

                          </div>
                        </div>
                      </div>
                      <div className={"filter-section__row"}>
                        <div className={"checkbox-line"}>
                          <div className={"checkbox-line__checkbox-wrapper"}>

                            <label className={"checkbox checkbox-line__checkbox"}>
                              <div className={"checkbox__box"}>
                                <input type={"checkbox"} id={"checkbox-1"} />

                                <FontAwesomeIcon icon={['fas', 'check']} className="checkbox__tick"/>
                              </div>
                              <div className={"checkbox__label"}>
                                Без пересадок
                              </div>
                            </label>

                          </div>

                          <div className={"checkbox-line__action-wrapper"}>
                            <a href={"#"} className={"checkbox-line__action"}>Только</a>
                          </div>

                        </div>
                      </div>
                      <div className={"filter-section__row"}>
                        <div className={"checkbox-line"}>
                          <div className={"checkbox-line__checkbox-wrapper"}>

                            <label className={"checkbox checkbox-line__checkbox"}>
                              <div className={"checkbox__box"}>
                                <input type={"checkbox"} id={"checkbox-1"} />

                                <FontAwesomeIcon icon={['fas', 'check']} className="checkbox__tick"/>
                              </div>
                              <div className={"checkbox__label"}>
                                1 пересадка
                              </div>
                            </label>

                          </div>

                          <div className={"checkbox-line__action-wrapper"}>
                            <a href={"#"} className={"checkbox-line__action"}>Только</a>
                          </div>

                        </div>
                      </div>
                      <div className={"filter-section__row"}>
                        <div className={"checkbox-line"}>
                          <div className={"checkbox-line__checkbox-wrapper"}>

                            <label className={"checkbox checkbox-line__checkbox"}>
                              <div className={"checkbox__box"}>
                                <input type={"checkbox"} id={"checkbox-1"} />

                                <FontAwesomeIcon icon={['fas', 'check']} className="checkbox__tick"/>
                              </div>
                              <div className={"checkbox__label"}>
                                2 пересадки
                              </div>
                            </label>

                          </div>

                          <div className={"checkbox-line__action-wrapper"}>
                            <a href={"#"} className={"checkbox-line__action"}>Только</a>
                          </div>

                        </div>
                      </div>
                      <div className={"filter-section__row"}>
                        <div className={"checkbox-line"}>
                          <div className={"checkbox-line__checkbox-wrapper"}>

                            <label className={"checkbox checkbox-line__checkbox"}>
                              <div className={"checkbox__box"}>
                                <input type={"checkbox"} id={"checkbox-1"} />

                                <FontAwesomeIcon icon={['fas', 'check']} className="checkbox__tick"/>
                              </div>
                              <div className={"checkbox__label"}>
                                3 пересадки
                              </div>
                            </label>

                          </div>

                          <div className={"checkbox-line__action-wrapper"}>
                            <a href={"#"} className={"checkbox-line__action"}>Только</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

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
