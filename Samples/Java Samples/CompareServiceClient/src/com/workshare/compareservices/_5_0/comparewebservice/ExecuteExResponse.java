
package com.workshare.compareservices._5_0.comparewebservice;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ExecuteExResult" type="{http://workshare.com/compareservices/5.0/comparewebservice/}CompareResults" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "executeExResult"
})
@XmlRootElement(name = "ExecuteExResponse")
public class ExecuteExResponse {

    @XmlElementRef(name = "ExecuteExResult", namespace = "http://workshare.com/compareservices/5.0/comparewebservice/", type = JAXBElement.class, required = false)
    protected JAXBElement<CompareResults> executeExResult;

    /**
     * Gets the value of the executeExResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CompareResults }{@code >}
     *     
     */
    public JAXBElement<CompareResults> getExecuteExResult() {
        return executeExResult;
    }

    /**
     * Sets the value of the executeExResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CompareResults }{@code >}
     *     
     */
    public void setExecuteExResult(JAXBElement<CompareResults> value) {
        this.executeExResult = value;
    }

}
